import {
  questions,
  getLastSlash,
  colors,
  buttonArrowImage,
} from "../../../schema/constants";
import { saveAnswers } from "../../../service/fin/routeQuestion.service";
import {
  formatAnswers,
  isMobile,
  cookies,
  handleBrandLogo,
} from "../../../utils/index";

export default function InitRouteQuestions() {
  const { createApp, h } = require("vue");
  const type = getLastSlash(window.location.pathname)
    .replace(/-/g, "_")
    .toUpperCase();

  const getCurrentLanguage = () => {
    return Weglot.getCurrentLang();
  };

  const isCanadian = cookies.get("isCanadian");

  console.log("isCanadian", isCanadian);

  const redirectTo = `${window.location.pathname}/video`;

  if (!isMobile()) {
    // make header sticky for this screen only
    document.querySelector(".header").style.position = "sticky";
  }
  handleBrandLogo();

  createApp({
    data() {
      return {
        progress: 0,
        currentIndex: 0,
        questions: questions[type],
      };
    },
    computed: {
      selectedAnswers() {
        return (
          this.currentQuestion.answer && this.currentQuestion.answer.length
        );
      },
      isCheckbox() {
        return this.currentQuestion.type === "checkbox";
      },
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      buttonsList() {
        return [
          {
            class: "step_btn back w-inline-block",
            text: "Back",
            style: {
              zIndex: this.currentIndex === 0 ? -1 : 1,
              opacity: this.currentIndex === 0 ? 0 : 100,
            },
            onClick: this.goToPreviousQuestion,
            children: [
              h(
                "div",
                {
                  class: "button_arrow back",
                },
                this.buttonChild("back")
              ),
              h(
                "span",
                {
                  style: {
                    marginLeft: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                  },
                },
                getCurrentLanguage() !== "es" ? "Back" : "Atrás"
              ),
            ],
          },
          {
            class: "step_btn next w-inline-block",
            text: "Next",
            style: {
              zIndex: this.currentQuestion.answer ? 1 : -1,
            },
            onClick:
              this.currentIndex === this.questions.length - 1 &&
              this.selectedAnswers
                ? this.submitAnswers
                : this.selectedAnswers
                ? this.goToNextQuestion
                : null,
            children: [
              h(
                "span",
                {
                  style: {
                    marginRight: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                  },
                },
                this.currentIndex === this.questions.length - 1
                  ? getCurrentLanguage() !== "es"
                    ? "Submit"
                    : "Enviar"
                  : getCurrentLanguage() !== "es"
                  ? "Next"
                  : "Siguiente"
              ),
              h(
                "div",
                {
                  class: {
                    button_arrow: true,
                  },
                },
                this.buttonChild("")
              ),
            ],
          },
        ];
      },
    },
    watch: {
      currentIndex() {
        this.setProgress();
      },
    },
    render() {
      return h(
        "div",
        {
          class: "slide",
        },
        [this.progressBar(), this.questionsContainer(), this.bottomActions()]
      );
    },
    methods: {
      buttonChild(className) {
        return [
          h("img", {
            class: `image-4 ${className}`,
            src: buttonArrowImage,
          }),
          h("div", {
            class: {
              button_active: true,
              active: className !== "back" && this.selectedAnswers,
            },
          }),
        ];
      },
      progressBar() {
        return h(
          "div",
          {
            class: "ques_prog_bar absolute w-vw",
            style: {
              width: "100vw",
              zIndex: 999,
              height: isMobile() ? "6px" : "8px",
              top: isMobile() ? "71px" : "80px",
              position: "fixed",
            },
          },
          [
            h("div", {
              class: "inner_prog_bar",
              style: {
                width: `${this.progress}%`,
                backgroundColor: colors.green,
              },
            }),
          ]
        );
      },
      // has element in the array
      has(array, element) {
        return array.indexOf(element) > -1;
      },
      questionItem(question) {
        question = this.changeToCanadianVersion(question);
        return h(
          "div",
          {
            class: {
              "active-option":
                this.selectedAnswers &&
                this.has(this.currentQuestion.answer, question.value),
              "ans check": true,
            },
            style: {
              backgroundColor:
                this.selectedAnswers &&
                this.has(this.currentQuestion.answer, question.value)
                  ? colors.green
                  : colors.white,
              color:
                this.selectedAnswers &&
                this.has(this.currentQuestion.answer, question.value)
                  ? colors.white
                  : colors.blue,
              opacity: question.hidden ? 0 : 100,
              cursor: question.hidden ? "default" : "pointer",
              height: isMobile() ? "auto" : "170px",
            },
            onClick: () =>
              question.hidden ? null : this.selectOption(question),
          },
          [
            h("img", {
              class: "ans_img",
              style: isMobile()
                ? {
                    width: "48px",
                    height: "48px",
                  }
                : {},
              src: question.icon,
            }),
            h(
              "div",
              {
                class: "text-block-22 text-center",
                style: !isMobile()
                  ? {
                      fontSize: "18px",
                      fontWeight: "bold",
                    }
                  : {
                      fontWeight: "bold",
                    },
              },
              getCurrentLanguage() !== "es"
                ? this.changeToCanadianVersion(question).label
                : this.changeToCanadianVersion(question).es
            ),
          ]
        );
      },
      changeToCanadianVersion(question) {
        if (
          question.hasCanadianVersion &&
          isCanadian &&
          JSON.parse(isCanadian)
        ) {
          const replaceWith = (string, replace, replaceWith) => {
            return string.replace(new RegExp(replace, "gi"), replaceWith);
          };
          const replace = question.replace.map((e) => e.split("#"));
          const toReplace = ["label", "es", "value"];
          for (let i = 0; i < replace.length; i++) {
            toReplace.forEach((e) => {
              question[e] = replaceWith(
                question[e],
                replace[i][0],
                replace[i][1]
              );
            });
          }
        }
        return question;
      },
      parseQuestionLabel(question, es = false) {
        let label = question.question;
        if (!label) return "";
        if (!label.includes("partner")) {
          return es ? question.es : label;
        }
        const lastAnswer = this.questions.find(
          (e) => e.question === "Who is with you on your financial journey?"
        );
        const answerText = lastAnswer.answer[0];
        if (answerText.includes("Just me")) {
          label = "Now, a little about you";
          question.es = "Ahora, un poco sobre ti";
          return es ? question.es : label;
        }
        const hasSpouseOrFianceorDomesticPartner = answerText.includes("spouse")
          ? "spouse"
          : answerText.includes("fiance")
          ? "fiance"
          : answerText.includes("domestic partner")
          ? "domestic partner"
          : "";

        label = label.replace("partner", hasSpouseOrFianceorDomesticPartner);
        console.log("partner", hasSpouseOrFianceorDomesticPartner, label);
        return es ? this.toEs(label) : label;
      },
      toEs(label) {
        return label
          .replace("partner", "conyugue")
          .replace("fiance", "novio")
          .replace("domestic partner", "concubino")
          .replace("spouse", "cónyuge");
      },
      questionsContainer() {
        const containerWidth = "1080px";
        const containerStyles = !isMobile()
          ? {
              width: containerWidth,
              maxWidth: containerWidth,
            }
          : {};
        return h(
          "div",
          {
            class: "ques_container",
            style: containerStyles,
          },
          [
            h(
              "div",
              {
                class: "ques_contain",
                style: {
                  marginBottom: "20px",
                },
              },
              [
                h(
                  "h1",
                  {
                    class: "question_text",
                    style: {
                      marginBottom: "10px",
                    },
                  },
                  this.parseQuestionLabel(
                    this.currentQuestion,
                    getCurrentLanguage() === "es"
                  )
                  // getCurrentLanguage() === "en"
                  //   ? this.currentQuestion.question
                  //   : this.currentQuestion.es
                ),
                h(
                  "span",
                  {
                    style: !isMobile()
                      ? {
                          fontSize: "16px",
                        }
                      : {},
                  },
                  getCurrentLanguage() !== "es"
                    ? this.isCheckbox
                      ? "Select all that apply."
                      : "Select One."
                    : this.isCheckbox
                    ? "Selecciona todas las que apliquen."
                    : "Selecciona una."
                ),
              ]
            ),
            h(
              "div",
              {
                class: "ans_container",
                style: !isMobile()
                  ? {
                      ...this.currentQuestion.style,
                      gridTemplateRows: "170px",
                    }
                  : {},
              },
              this.currentQuestion.options
                .filter((elem) => (isMobile() ? !elem.hidden : true))
                .map((question) => this.questionItem(question))
            ),
          ]
        );
      },
      bottomActions() {
        return h(
          "div",
          {
            class: {
              "bottom_container five": isMobile(),
              bottom_progress_nav: !isMobile(),
            },
            style: {
              background: colors.darkBlue,
            },
          },
          [
            h(
              "div",
              {
                class: "questions_buttons",
                style: isMobile()
                  ? {
                      padding: "10px",
                    }
                  : { padding: "10px", width: "600px", maxWidth: "600px" },
              },
              this.buttonsList.map((button) =>
                h(
                  "div",
                  {
                    class: button.class,
                    style: button.style,
                    onClick() {
                      button.onClick();
                    },
                  },
                  button.children
                )
              )
            ),
          ]
        );
      },
      goToNextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
        }
      },
      submitAnswers() {
        saveAnswers(
          formatAnswers(this.questions),
          cookies.get("COMPANY_ID"),
          cookies.get("PROSPECT_ID")
        )
          .then((res) => {
            window.location.href = `${redirectTo}`;
          })
          .catch((err) => {
            alert("failed");
          });
      },
      goToPreviousQuestion() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      selectOption(item) {
        if (
          this.selectedAnswers &&
          this.has(this.currentQuestion.answer, item.value)
        ) {
          if (this.isCheckbox) {
            this.questions[this.currentIndex].answer = [
              ...this.questions[this.currentIndex].answer,
            ].filter((ans) => ans !== item.value);
          } else {
            this.currentQuestion.answer = null;
          }
        } else {
          if (this.isCheckbox) {
            this.questions[this.currentIndex].answer.push(item.value);
          } else {
            this.questions[this.currentIndex].answer = [item.value];
          }
        }
      },
      setProgress() {
        this.progress =
          (this.questions.filter(
            (question) =>
              question.answer !== null &&
              question.answer !== "" &&
              question.answer !== undefined &&
              question.answer.length > 0
          ).length /
            this.questions.length) *
          100;
      },
    },
  }).mount("#app");
}
