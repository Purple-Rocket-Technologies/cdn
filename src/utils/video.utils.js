import { fetchVideoService } from "../service/video/index";
const videoUtils = {
  initialState: {
    VIDEO_TYPE: "",
    COUNTRY: "",
    LANG: "",
    VIDEO_ID: "",
    USER_URL: "",
    VIDEO_PROSPECT_ID: "",
    VIDEO_TOTAL_TIME: "",
    IS_PLAYER_LOADED: false,
    PLAYER_CURRENT_TIME: 0,
    VIDEO_WATCH_PERCENTAGE: 0,
    PATH_OPTIONS: null,
    MCQ_OPTIONS: null,
    PLAYER: null,
    APPOINTMENT_LINK: null,
    COMPANY_ID: null,
    IS_OLD_LINK: false,
    ADVISOR: {},
  },
  methods: {
    showError(error) {
      $("#error_msg").text(error);
      $(function () {
        $(".error-triggerer")
          .click(function () {
            this.click();
          })
          .click();
      });
    },
    showSuccess(msg) {
      $(".success-msg-text").text(msg);
      $(function () {
        $(".success-triggerer")
          .click(function () {
            this.click();
          })
          .click();
      });
    },
    letsStart() {
      $(function () {
        $(".nav-bullet-dot:nth-child(2)")
          .click(function () {
            this.click();
          })
          .click();
      });
      $(".onboarding").addClass("pan-out");
      $(".watch-video").addClass("pan-in");
      $("*").scrollTop(0);
    },
    formatSecondsToTime(time) {
      const hrs = ~~(time / 3600);
      const mins = ~~((time % 3600) / 60);
      const secs = ~~time % 60;
      let ret = "";
      if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    },
    autoFill() {
      const firstName = url.query.get("fname");
      const email_fill = url.query.get("email");
      if (firstName && email_fill) {
        $("#fname").val(firstName);
        $("#email").val(email_fill);
        $("#peoplewatching").val(1);
        $("#country-us").click();
        $("#country-us").toggleClass("active");
        videoUtils.methods.fetchVideo(videoType, "US", "EN");
      }
    },
    fetchVideo(type, country, lang) {
      console.log("fetching video");
      fetchVideoService([
        {
          key: "type",
          value: type,
        },
        {
          key: "countryCode",
          value: country,
        },
        {
          key: "language",
          value: lang,
        },
      ])
        .then(function (response) {
          console.log("video fetched", response);
          $(".video-container").css(
            "height",
            $(".video-container").width() / (16 / 9)
          );
          videoUtils.methods.renderVideo(response.url);
        })
        .catch(function (error) {
          videoUtils.methods.showError("Oops! Something went wrong.");
          console.log(error, "error", type, country, lang);
        });
    },
    renderVideo(videoID) {
      videoUtils.initialState.PLAYER = new Vimeo.Player(
        document.getElementById("video")
      );
      videoUtils.initialState.PLAYER.loadVideo(videoID)
        .then(function (id) {
          videoUtils.methods.setTotalDuration();
          videoUtils.initialState.PLAYER.pause();
        })
        .catch(function (error) {});
    },
    setTotalDuration() {
      const player = new Vimeo.Player(document.getElementById("video"));
      player.getDuration().then(function (duration) {
        videoUtils.methods.setFinalFunction();
        $(".totaltime").text(videoUtils.methods.formatSecondsToTime(duration));
      });
    },
    setFinalFunction() {
      console.log("setting final function");
      const player = new Vimeo.Player(document.getElementById("video"));
      console.log("player", player);
      player.on("ended", function () {
        $(function () {
          $(".nav-bullet-dot:nth-child(3)")
            .click(function () {
              this.click();
            })
            .click();
        });
        $(".site-content-wrapper.video").addClass("move");
        $(".site-content-wrapper.paths").addClass("move");
      });
    },
    isEmail(e) {
      return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        e
      );
    },
    toggleFocus(e) {
      console.log(e.type);
      if (e.type === "focus") {
        $(".email_help_text").addClass("active");
      } else {
        $(".email_help_text").removeClass("active");
      }
    },
  },
};

export default videoUtils;
