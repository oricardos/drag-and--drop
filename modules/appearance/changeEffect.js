export default function changeEffect() {
  const ranges = document.querySelectorAll('.effects .uk-range');
  const effect = document.querySelector('.effect');
  let effectFilter;

  ranges.forEach((range) => {
    range.addEventListener('change', function () {
      if (this.id === 'blur') {
        effectFilter = effect.style.getPropertyValue('filter');
        effect.style.filter = `blur(${this.value}px)`;
      } else {
        effectFilter = effect.style.getPropertyValue('filter');
        effect.style.filter = effectFilter + `${this.id}(${this.value}%)`;
      }
    });
  });
}
