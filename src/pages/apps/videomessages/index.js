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
          "Watch a video message from repname, to learn your next best step.",
        playPauseToggle: false,
        showOverLay: false,
        toggleVideoIcon: "paused",
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
            !isFinPath()
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
              class: "video-overlay",
              onmouseenter: () => this.showOverLay = true,
              onmouseleave: () => this.showOverLay = false,
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
                            class: "pointer-cursor index100",
                            src: "https://discoverfin.s3.amazonaws.com/assets/Subtract.svg",
                          })
                        : null,
                      this.showPlayButton === "playing"
                        ? h("div", { class: "d-flex" }, [
                            h("img", {
                              onClick: () => {
                                this.togglePlayback();
                              },
                              class: "pointer-cursor index100",
                              src: "https://discoverfin.s3.us-east-1.amazonaws.com/assets/playpause.svg",
                            }),
                            h("img", {
                              onClick: () => {
                                this.toggleAudio();
                              },
                              class: "pointer-cursor index100",
                              src: "https://discoverfin.s3.us-east-1.amazonaws.com/assets/mute.svg",
                            }),
                          ])
                        : null,
                    ]
                  )
                : null,
              h("video", {
                id: "video",
                class: "video-container",
                controls: "false",
                autoPlay: "true",
              }),
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
      },
      showSettingsOverLay() {
        if (this.showOverLay) {
          this.showOverLay = false;
        } else {
          this.showOverLay = true;
        }
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
        video.play()
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
