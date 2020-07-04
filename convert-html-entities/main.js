function convertHTML(str) {
  const conversion = {"'": "&apos;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};
  let strArr=str.split("");
  str = strArr.reduce((a, ltr) => conversion[ltr] ? a+conversion[ltr] : a+ltr, "").trim();
  console.log(str);
  return str;
}