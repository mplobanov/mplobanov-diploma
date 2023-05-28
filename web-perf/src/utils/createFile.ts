export const makeTextFile = function (text: string) {
    const data = new Blob([text], {type: "application/json"});

    const textFile = window.URL.createObjectURL(data);

    return textFile;
  };