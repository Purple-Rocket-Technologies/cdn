const catchExceptionToSentry = (type, data) => {
    type === "string" ? Sentry.captureMessage(data) : Sentry.captureException(data);
}