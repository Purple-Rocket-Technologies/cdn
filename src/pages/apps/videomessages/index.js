import { createApp, h } from "vue";
import { getVideoMessage } from "../../../service/videomessages/videomessage.service";
import { cookies, isEmpty } from "../../../utils";
import "../../../../src/styles/videomessages.css";
import { isFinPath, isIPN } from "../../../utils/videomessage.utils";
import VideoPlayer from "./videoComponent.vue";
export function init(advisorName = "") {
  createApp({
    data() {
      return {
        player: {},
        videoMessages: [],
        description:
          "Watch a video message from repname, to learn your next best step.",
        playPauseToggle: false,
        showOverLay: false,
        toggleVideoIcon: "paused",
        muted: false,
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
      showPlayButton() {
        return this.toggleVideoIcon;
      },
    },
    components: {
      VideoPlayer,
    },
    render() {
      return h(
        "div",
        {
          class: " text-center",
        },
        [
          h(
            "span",
            {
              class: "video-description text-center",
            },
            !isFinPath() && !isIPN()
              ? this.description.replace(
                  /repname/g,
                  advisorName ||
                    cookies.get("FIRST_NAME") ||
                    cookies.get("REP_NAME")
                )
              : null
          ),
          h(
            "div",
            {
              class: {
                "video-overlay": true,
                "mx-center mt-12": !isFinPath() && !isIPN(),
              },
              onmouseenter: () => (this.showOverLay = true),
              onmouseleave: () => (this.showOverLay = false),
              // ontouchstart:() => (this.showOverLay = true),
              ontouchend: () => !this.showOverLay,
            },
            [
              this.showOverLay
                ? h(
                    "div",
                    {
                      class:
                        "d-flex video-overlay position-absolute justify-content-center align-items-center space-x-2",
                    },
                    [
                      this.showPlayButton === "paused"
                        ? h("img", {
                            onClick: () => {
                              this.togglePlayback();
                            },
                            class:
                              "pointer-cursor index100 bg-white video-controls-icons ",
                            src: "https://discoverfin.s3.amazonaws.com/assets/play.svg",
                          })
                        : null,
                      this.showPlayButton === "playing"
                        ? h(
                            "div",
                            { class: "d-flex align-item-center space-x-2" },
                            [
                              h("img", {
                                onClick: () => {
                                  this.togglePlayback();
                                },
                                class:
                                  "pointer-cursor index100 video-controls-icons bg-white",
                                src: "https://discoverfin.s3.amazonaws.com/assets/pause.svg",
                              }),
                              h("img", {
                                onClick: () => {
                                  this.toggleAudio();
                                },
                                class:
                                  "pointer-cursor index100 video-controls-icons bg-white",
                                src: `https://discoverfin.s3.amazonaws.com/assets/${
                                  !this.muted
                                    ? "speaker-high"
                                    : "speaker-simple-slash"
                                }.svg`,
                              }),
                            ]
                          )
                        : null,
                    ]
                  )
                : null,
              // h("video", {
              //   id: "video",
              //   class: "video-container",
              //   attrs: {
              //   controls: "false",
              //   autoPlay: "true",
              //   }
              // }),
              h(VideoPlayer),
            ]
          ),
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
      getVideoPlayer() {
        return document.getElementById("video");
      },
      togglePlayback() {
        const video = this.getVideoPlayer();
        if (video.paused) {
          this.toggleVideoIcon = "playing";
          this.playPauseToggle = true;
          video.play();
          console.log(this.showPlayButton, "show button");
        } else {
          this.toggleVideoIcon = "paused";
          this.playPauseToggle = false;
          video.pause();
          console.log(this.showPlayButton, "show button");
        }
      },
      toggleAudio() {
        const video = this.getVideoPlayer();
        video.muted = !video.muted;
        this.muted = video.muted;
      },
      showSettingsOverLay() {
        this.showOverLay = !this.showOverLay;
      },
    },
    async mounted() {
      const USER_URL =
        cookies.get("USER_ID") || localStorage.getItem("USER_ID");
      this.videoMessages = await this.getVideoMessage(USER_URL);
      const openFinPath = document.querySelectorAll(".open-video");
      const bg_pr_open_fin = document.querySelectorAll(
        ".open-video .bg-primary"
      );
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
              video.scrollIntoView({
                inline: "start",
                block: "start",
                behavior: "smooth",
              });
              video.play();
            }
          };
        }
        cookies.set("videomessageavailable", true);
        cookies.set("videoEnded", false);
        video.addEventListener("ended", () => {
          videoEnded = 1;
          cookies.set("videoEnded", true);
          for (let i = 0; i < bg_pr_open_fin.length; i++) {
            bg_pr_open_fin[i].style.background = "#2ad76f";
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
        if (bg_pr_open_fin && bg_pr_open_fin.length) {
          for (let i = 0; i < bg_pr_open_fin.length; i++) {
            bg_pr_open_fin[i].style.background = "#2ad76f";
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
