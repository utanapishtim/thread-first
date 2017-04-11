module.exports = threadfst

const isFunction = (x) => typeof x === 'function'
const isArray = Array.isArray

function handleForms (x, form) {
  if (isFunction(form)) return form(x)
  if (isArray(form)) return x[form[0]].apply(x, form.slice(1))
  if (x !== undefined) {
    return (isFunction(x[form])) ? x[form]() : x[form]
  }
  return x
}

function threadfst (x, forms) {
  if (!isArray(forms)) {
    throw new TypeError('forms must be passed in an array!')
  }
  return forms.reduce(handleForms, x)
}
