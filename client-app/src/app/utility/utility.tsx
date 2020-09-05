export const utilities = (function () {
  function contentCurry<T>(payload: T) {
    return function (callback: any) {
      return callback.call(payload);
    };
  }
  return {
    contentCurry: contentCurry,
  };
})();
