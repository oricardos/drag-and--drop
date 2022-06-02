export default function intro() {
introJs().setOptions({
    "dontShowAgain": true,
    steps:[{
        title: 'Seja bem-vindo ao Beacons! 👋',
        intro: 'Seja bem-vindo ao Beacons da deep web'
    },{
        title: '📝 Conteúdo',
        element: document.querySelector('a.intro-content'),
        intro: 'Na aba <b>Conteúdo</b> você consegue gerenciar todo o conteúdo da sua página.'
    },{
        title: '🖌 Aparência',
        element: document.querySelector('a.intro-appearance'),
        intro: 'Na aba APARÊNCIA você consegue personalizar sua página e deixar ela com a sua cara.'
    },{
        title: 'Preview 👀',
        element: document.querySelector('.intro-preview'),
        intro: 'Na área de preview, você pode ver como está ficando o seu projeto.'
    },{
        title: 'Vamos Começar! 🏁',
        element: document.querySelector('.intro-start'),
        intro: 'Comece adicionando uma foto sua...'
    }]
}).start();

introJs().setOption("dontShowAgain", true).start();
}