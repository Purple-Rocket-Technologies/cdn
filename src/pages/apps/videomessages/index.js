import { createApp, h } from "vue";
import { getVideoMessage } from "../../../service/videomessages/videomessage.service";
import { cookies } from "../../../utils";
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
          !isFinPath()
            ? h(
                "span",
                {
                  class: "video-description text-center",
                },
                this.description.replace(
                  /repname/g,
                  advisorName || cookies.get("REP_NAME")
                )
              )
            : null,
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
    },
    async mounted() {
      const USER_URL =
        cookies.get("USER_ID") || localStorage.getItem("USER_ID");
      this.videoMessages = await this.getVideoMessage(USER_URL);
      const openFinPath = document.querySelectorAll(".open-video");
      if (this.firstVideoMessage.onDemandLink) {
        const video = document.getElementById("video");
        const videoSrc = this.firstVideoMessage.onDemandLink;
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(videoSrc);
          hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = videoSrc;
        }
        let videoEnded = 0;
        for (let i = 0; i < openFinPath.length; i++) {
          openFinPath[i].style.opacity = "85%";
          if (!videoEnded) {
            openFinPath[i].onclick = function () {
              video.play();
            };
          }
        }
        cookies.set("videomessageavailable", true);
        video.addEventListener("ended", () => {
          videoEnded = 1;
          cookies.set("videoEnded", true);
          for (let i = 0; i < openFinPath.length; i++) {
            openFinPath[i].style.opacity = "100";
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
