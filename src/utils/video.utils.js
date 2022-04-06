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
      $("#error_msg").text(msg);
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
  },
};
