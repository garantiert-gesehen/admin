import classNames from 'classnames';

export default function extendTheme(theme1, theme2) {
  if (!theme1) {
    return theme2;
  }
  if (!theme2) {
    return theme1;
  }

  return Object.keys(theme2).reduce((result, key) => {
    return { ...result, [key]: classNames(result[key], theme2[key]) };
  }, { ...theme1 });
}
