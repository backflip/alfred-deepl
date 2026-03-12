import alfy from "alfy";

const apiKey = alfy.userConfig.get("apiKey");

let error = false;

const response = await fetch(`https://api-free.deepl.com/v2/translate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `DeepL-Auth-Key ${apiKey}`,
  },
  body: JSON.stringify({
    text: [alfy.input],
    target_lang: "EN",
    source_lang: "DE",
  }),
}).then((response) => {
  if (!response.ok) {
    error = true;
  }

  return response.json();
});

if (error) {
  throw new Error(JSON.stringify(response));
}

const items = response.translations.map((element) => ({
  title: element.text,
  arg: element.text,
}));

alfy.output(items);
