import alfy from "alfy";

const apiKey = alfy.userConfig.get("apiKey");

const { translations } = await alfy.fetch(
  `https://api-free.deepl.com/v2/translate`,
  {
    searchParams: {
      auth_key: apiKey,
      text: alfy.input,
      target_lang: "EN",
      source_lang: "DE",
    },
  }
);

const items = translations.map((element) => ({
  title: element.text,
  arg: element.text,
}));

alfy.output(items);
