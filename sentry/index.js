class SentryError extends Error {
  constructor(errMessage, data, type = "error") {
    // Passes errMessage to the Error super class,
    // similar to call new Error(errMessage).
    super(errMessage);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SentryError);
    }

    this.name = "SentryError";

    Sentry.addBreadcrumb({
      category: "data",
      message: errMessage,
      data: data,
      type: type,
      level: Sentry.Severity.Debug,
    });

    Sentry.captureException(errMessage);
    
    console.error(errMessage);
  }
}
