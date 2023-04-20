//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);

import {
  BasePage,
  cookies,
  isEmpty,
  isMobile,
  getVideoBaseUrl,
  handleBrokerCheckLinkAndDisclosure,
  initiateAdvisorLogo,
  isDevEnvironment,
} from "../../../utils";
import Service from "../../../service/Service";
class FinalStep extends BasePage {
  constructor(_object) {
    super(_object);
  }
}

export default function initFinalStep() {
  let page = new FinalStep({
    URL_COMPANY:
      cookies.get("URL_COMPANY") !== "undefined"
        ? cookies.get("URL_COMPANY")
        : cookies.get("COMPANY_URL"),
    URL_USER:
      cookies.get("URL_USER") !== "undefined"
        ? cookies.get("URL_USER")
        : cookies.get("USER_URL"),
    IS_OLD_LINK:
      cookies.get("isOldUrl") === "false" ? undefined : cookies.get("isOldUrl"),
    PROSPECT_EMAIL: "",
  });
  page.APPOINTMENT_LINK = !isEmpty(page.IS_OLD_LINK)
    ? `https://${window.location.host}/appointment?id=${page.URL_USER}`
    : `https://${window.location.host}/appointment?id=${page.URL_USER}`;

  initiateAdvisorLogo(
    cookies.get("REP_NAME"),
    !isMobile() ? "#4417c7" : "#320ba7"
  );

  const IS_CANADIAN = cookies.get("isCanadian");

  if (IS_CANADIAN && JSON.parse(IS_CANADIAN)) {
    const replaceSpanEl = $("#replace-me");
    const text = replaceSpanEl.text();
    replaceSpanEl.text(text.replace(/Roth IRA/g, "TFSA"));
  }

  $("#logo-container").css("text-decoration", "none !important");
  // }

  // Reading name cookie
  const user_name = cookies.get("Name");
  const rep_name = capitalize(cookies.get("REP_NAME"));
  $(".user_name").each(function () {
    $(this).html("" + user_name);
  });

  $("#video-area").css(
    "background-image",
    `url(${
      window.location.pathname.includes("make-more-money")
        ? "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/62447936cd9d3938d09c181d_more_than_buisness.png"
        : "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/62447935eafc80b0556a88bd_7_steps.png"
    })`
  );

  const getTrailerId = () => {
    return window.location.pathname.includes("make-more-money")
      ? "445443796"
      : "614514350";
  };

  const videoTitle = () => {
    return window.location.pathname.includes("make-more-money")
      ? "More than a Business"
      : "7 Steps To Create A Clear Financial Vision";
  };

  handleBrokerCheckLinkAndDisclosure({
    brokerCheckLink: cookies.get("brokerCheckLink"),
    companyDisclosure: cookies.get("disclosureLink"),
    name: rep_name,
  });

  $("#video-title").text(videoTitle());

  const setTrailerVideo = () => {
    $("#video").each(() => {
      $(this).attr("src", `https://player.vimeo.com/video/${getTrailerId()}`);
    });
  };

  $("#aptmt_link").attr("href", page.APPOINTMENT_LINK);

  function handlePublicFeatures() {
    const publicFeatures =
      !isEmpty(cookies.get("publicFeatures")) &&
      JSON.parse(cookies.get("publicFeatures"));
    console.log("publicFeatures", publicFeatures);
    if (publicFeatures) {
      const finPath = publicFeatures.finPath;
      if (!finPath) {
        const videoMessageEl = $("#video_messages");
        $("#video_messages").remove();
        videoMessageEl.insertBefore($("#step1"));
        $("#step1").remove();
        $(".down-arrow").remove();
      }
    }
  }

  console.log("isDevEnvironment");
  handlePublicFeatures();

  setTrailerVideo();
  /**
   *
   *
   * @param {boolean} [isScrolling=true]
   * @param {*} scrollDirection
   * @param {*} targetElement
   */
  function scrollButtonHandlers(
    isScrolling = true,
    scrollDirection,
    targetElement
  ) {
    if (
      isScrolling
        ? scrollDirection === "up"
        : window.scrollY > targetElement.offsetTop + targetElement.offsetHeight
    ) {
      $(".hide-on-scroll").each(function () {
        $(this).css("display", "block");
      });
      $(".down-arrow").css("display", "none");
    } else {
      $(".hide-on-scroll").each(function () {
        $(this).css("display", "none");
      });
    }
    if (window.scrollY < targetElement.offsetTop + targetElement.offsetHeight) {
      $(".down-arrow").css("display", "grid");
    } else {
      $(".down-arrow").css("display", "none");
    }
  }

  let scroll_position = 0;
  let scroll_direction;

  // Setup isScrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function () {
      scroll_direction =
        document.body.getBoundingClientRect().top > scroll_position
          ? "up"
          : "down";
      scroll_position = document.body.getBoundingClientRect().top;
      const elementTarget = document.getElementById("header_area");
      scrollButtonHandlers(true, scroll_direction, elementTarget);
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        scrollButtonHandlers(false, scroll_direction, elementTarget);
      }, 66);
    },
    false
  );

  [$("#rep-name"), $("#rep_name"), $(".rep_name"), $(".rep_name_cta")].forEach(
    function (el) {
      el.text(cookies.get("FIRST_NAME"));
    }
  );
  const userNameEls = document.querySelectorAll("#user-name");
  userNameEls.forEach((el) => {
    el.innerHTML = capitalize(cookies.get("Name"));
  });

  const rep_image = cookies.get("PIC") || cookies.get("REP_IMAGE");
  $("#rep-image").attr("src", rep_image);
  $("#rep-image").removeAttr("loading");
  $("#rep-image").replaceWith(
    isMobile()
      ? `<img id="rep-image" src="${rep_image}" alt="" class="image-45" />`
      : `<img id="rep-image" src="${rep_image}" alt="" class="image-44" />`
  );
  $(".rep-photo").css("background-image", "url('" + rep_image + "')");
  $("#appointment-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  $("#message-rep").each(function () {
    $(this).attr("href", `sms:${cookies.get("PHONE")}`);
    $(this).attr("target", "_parent");
  });

  const getVideoType = () => {
    return window.location.pathname.includes("make-more-money")
      ? "businessOverview"
      : "financialHouse";
  };

  const getPathAnswers = async (id) => {
    const prospectService = new Service(
      `company/${cookies.get("COMPANY_ID")}/prospects/`
    );
    prospectService.equals("_id", id);
    prospectService.equals("userId", cookies.get("USER_ID"));
    return await new Promise((resolve, reject) => {
      prospectService
        .find()
        .then((response) => {
          if (response.count > 0) {
            resolve(response.data[0]);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const questionAndAnswersOfProspect = (prospectAnswers) => {
    return [
      prospectAnswers.ques_1,
      prospectAnswers.ques_2,
      prospectAnswers.ques_3,
      prospectAnswers.ques_4,
      prospectAnswers.ques_5,
    ]
      .filter(
        (answer) =>
          answer
            .toLowerCase()
            .includes(
              "what are areas you want to evaluate or know more about?"
            ) && answer !== ""
      )
      .map((currentItem) =>
        currentItem
          ? currentItem.split("*").splice(1, currentItem.split("*").length - 1)
          : []
      )
      .reduce((a, b) => a.concat(b), [])
      .map(
        (currentItem) => `<div class="${
          isMobile() ? "div-block-84" : "div-block-65"
        }"><img
      class="pointer-image"
      src="https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/620e98d16dc631d33da9dd03_Group%20272.svg"
      loading="lazy" alt=""><h2 class="${
        isMobile() ? "ml-3-2 text-18 font-normal " : "font-normal ml-3"
      }">${currentItem}</h2></div>`
      );
  };

  const openFINPath = (email) => {
    window.open(
      `https://${finpath_base || "finpath.discoverfin.io"}/${
        page.URL_USER
      }/start?email=${email}`,
      "_blank"
    );
  };

  const openVideoApp = (email) => {
    window.open(
      !isEmpty(page.IS_OLD_LINK)
        ? `${getVideoBaseUrl()}${getVideoType()}/?company=${
            page.IS_OLD_LINK
          }&user=${page.URL_USER}&fname=${cookies.get("Name")}&email=${email}`
        : `${getVideoBaseUrl()}${getVideoType()}/?id=${
            page.URL_USER
          }&fname=${cookies.get("Name")}&email=${email}`,
      "_self"
    );
  };

  async function populatePathOptions() {
    let prospectAnswers;
    try {
      prospectAnswers = await getPathAnswers(cookies.get("PROSPECT_ID"));
    } catch (e) {
      console.log(e);
    }
    const FinNumberEls = document.querySelectorAll("#fin_number");
    FinNumberEls.forEach((el) => {
      el.innerHTML = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(prospectAnswers["fin_number"]);
    });

    // $("#video-area").click(() => {
    //   openVideoApp(prospectAnswers["email"]);
    // });

    $(".open-video").each(function () {
      $(this).click(() => {
        const videoEnded = cookies.get("videoEnded");
        const video_message_available = cookies.get("videomessageavailable");
        if (
          (videoEnded && JSON.parse(videoEnded)) ||
          !JSON.parse(video_message_available)
        ) {
          openFINPath(prospectAnswers["email"]);
        }
        // openVideoApp(prospectAnswers["email"]);
      });
    });

    // const isMakeMoreMoney =
    //   window.location.pathname.includes("make-more-money");

    // if (!isMakeMoreMoney) {
    //   $(".manage-both").css("display", "block");
    //   parent.html(questionAndAnswersOfProspect(prospectAnswers));
    // } else {
    //   $(".manage-both").css("display", "none");
    // }
    $(".manage-both").css("display", "none");
  }

  populatePathOptions();

  $("#watch-trailer").click(function () {
    new Vimeo.Player($("#video")).play();
    page.track("Clicked Watch FIN Trailer", {
      company: page.URL_COMPANY,
      type: "Fin Prospect",
      page: "FIN APP FINAL STEP",
      fieldTrainer: page.URL_USER,
    });
  });

  $(".iframe-back").click(function () {
    $("#appointment-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  });

  $(".closer-last").click(function () {
    // $(".last-popup").removeClass("active");
    $("#appointment-iframe iframe .w-iframe iframe").attr(
      "src",
      page.APPOINTMENT_LINK
    );
  });
}
