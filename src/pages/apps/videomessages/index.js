import { createApp, h } from "vue";
import { getVideoMessage } from "../../../service/videomessages/videomessage.service";
import { cookies, isEmpty } from "../../../utils";
import "../../../../src/styles/videomessages.css";
import { isFinPath } from "../../../utils/videomessage.utils";
export function init(advisorName = "") {
  createApp({
    data() {
      return {
        player: {},
        videoMessages: [],
        description:
          "Watch a video from your financial advisor, repname to unlock your next step.",
      };
    },
    computed: {
      firstVideoMessage() {
        return (
          this.videoMessages &&
          this.videoMessages.length > 0 &&
          this.videoMessages[0]
        );
      },
    },
    render() {
      return h(
        "div",
        {
          class: "d-flex align-items-center flex-column text-center",
        },
        [
          h(
            "span",
            {
              class: "video-description text-center",
            },
            isFinPath()
              ? "Your results are ready for review! But before that, I have a short video message for you."
              : this.description.replace(
                  /repname/g,
                  advisorName || cookies.get("REP_NAME")
                )
          ),
          h("video", {
            id: "video",
            class: "video-container",
            controls: "true",
          }),
        ]
      );
    },
    methods: {
      getVideoMessage,
      handleFINPathButtons(fin_path_first_btn = false) {
        const fin_path_first_btnEL =
          document.querySelector(".fin-path-one-cta");
        if (fin_path_first_btnEL) {
          fin_path_first_btnEL.style.display = fin_path_first_btn
            ? "flex"
            : "none";
        }
      },
    },
    async mounted() {
      const USER_URL =
        cookies.get("USER_ID") || localStorage.getItem("USER_ID");
      this.videoMessages = await this.getVideoMessage(USER_URL);
      const openFinPath = document.querySelectorAll(".open-video");
      const showAfterUnlock = document.querySelectorAll(".show-after-unlock");
      const hideAfterUnlock = document.querySelectorAll(".hide-after-unlock");
      const videoSrc = this.firstVideoMessage.onDemandLink;
      this.handleFINPathButtons(!isEmpty(videoSrc));
      if (videoSrc) {
        const video = document.getElementById("video");
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(`${videoSrc}#t=0.001`);
          hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = `${videoSrc}#t=0.001`;
        }
        let videoEnded = 0;
        for (let i = 0; i < openFinPath.length; i++) {
          openFinPath[i].onclick = function () {
            if (!videoEnded) {
              video.scrollIntoView({});
              video.play();
            }
          };
        }
        cookies.set("videomessageavailable", true);
        cookies.set("videoEnded", false);
        video.addEventListener("ended", () => {
          videoEnded = 1;
          cookies.set("videoEnded", true);
          for (let i = 0; i < openFinPath.length; i++) {
            openFinPath[i].onclick = function () {
              console.log("Helo");
            };
          }
          if (showAfterUnlock && showAfterUnlock.length) {
            for (let i = 0; i < showAfterUnlock.length; i++) {
              showAfterUnlock[i].style.display = "block";
            }
          }

          if (hideAfterUnlock && hideAfterUnlock.length) {
            for (let i = 0; i < hideAfterUnlock.length; i++) {
              hideAfterUnlock[i].style.display = "none";
            }
          }

          for (let i = 0; i < openFinPath.length; i++) {
            openFinPath[i].style.opacity = "100";
          }
        });
        video.addEventListener("play", () => {
          if (showAfterUnlock && showAfterUnlock.length) {
            for (let i = 0; i < showAfterUnlock.length; i++) {
              showAfterUnlock[i].style.display = "none";
            }
          }
          if (hideAfterUnlock && hideAfterUnlock.length) {
            for (let i = 0; i < hideAfterUnlock.length; i++) {
              hideAfterUnlock[i].style.display = "block";
            }
          }
        });
        const show_fin_access = document.getElementById("show_fin_access");
        if (show_fin_access) {
          show_fin_access.style.display = "flex";
        }
      } else {
        cookies.set("videomessageavailable", false);
        if (openFinPath && openFinPath.length) {
          for (let i = 0; i < openFinPath.length; i++) {
            openFinPath[i].style.opacity = "100";
          }
        }
        // openFinPath.innerHTML = `<div class="green-cta"><h1 class="heading-29">ACCESS FINPATH</h1></div>`;
        // const hide_me_if_vod = document.getElementById("hide_me_if_vod");
        document.getElementById("video_messages").remove();
        $(".unlock-copy").text("ACCESS MY");
        // if (hide_me_if_vod) {
        //   hide_me_if_vod.style.display = "none";
        // }
      }
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    },
  }).mount("#video_messages");
}
