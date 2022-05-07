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
        lang_val = "EN";
        country_val = "US";
        fetchVideo(videoType, "US", "EN");
      }
    },
    fetchVideo(type, country, lang) {
      fetchVideoService(type, country, lang)
        .then(function (response) {
          video_id = response.url;
          $(".video-container").css(
            "height",
            $(".video-container").width() / (16 / 9)
          );
          renderVideo(video_id);
        })
        .catch(function (error) {
          this.showError("Oops, There was an unexpected error.");
        });
    },
    renderVideo(videoID) {
      iframe = document.getElementById("video");
      player = new Vimeo.Player(iframe);
      player
        .loadVideo(videoID)
        .then(function (id) {
          this.setTotalDuration();
          playerinitialized = 1;
          player.pause();
          this.setFinalFunction();
        })
        .catch(function (error) {});
    },
    setTotalDuration() {
      player.getDuration().then(function (duration) {
        totalDurationTime = duration;
        $(".totaltime").text(format(duration));
      });
    },
    setFinalFunction() {
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
  },
};

export default videoUtils;
