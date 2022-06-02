// função recebe o elemento 'el' onde vai ser atribuído o listener,
// o botão 'btn' que vai ser feito a mudança do atributo disabled,
// e o tipo de input 'type', no caso de file precise ser change,
// os demais tipo podem ser keyup.
export default function removeDisabled(el, btn, type) {
  if (type === 'file') {
    el.addEventListener('change', function () {
      if (el.value !== '') {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', 'disabled');
      }
    });
  } else {
    el.addEventListener('keyup', function () {
      if (el.value !== '') {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', 'disabled');
      }
    });
  }
}
