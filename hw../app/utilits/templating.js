export const render = (template, binding) => {
  let result = template;
  Object.keys(binding).forEach((e) => {
    result = result.replaceAll(`{{${e}}}`, binding[e]);
  });
  return result;
};
