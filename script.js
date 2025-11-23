const Title = document.getElementById("Title");
const Home = document.getElementById("button1");
const Dashboard = document.getElementById("button2");
const Settings = document.getElementById("button3");


Home.addEventListener("click", () => {
    const tween = Home.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0, -10px)' },
], {
    duration: 250,
    iterations: 2,
    direction: "alternate",
    easing: "ease-out"
});
});
Dashboard.addEventListener("click", () => {
    const tween = Dashboard.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0, -10px)' },
], {
    duration: 250,
    iterations: 2,
    direction: "alternate",
    easing: "ease-out"
});
});
Settings.addEventListener("click", () => {
    const tween = Settings.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0, -10px)' },
], {
    duration: 250,
    iterations: 2,
    direction: "alternate",
    easing: "ease-out"
});
});