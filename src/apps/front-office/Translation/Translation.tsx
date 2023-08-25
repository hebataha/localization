import TranslationsOptions from "./TranslationsOptions/TranslationsOptions";

export type TranslationProps = {
  children: React.ReactNode;
};
export default function Translation() {
  return (
    <>
      <h1>Translation</h1>
      <TranslationsOptions/>
    </>
  );
}
