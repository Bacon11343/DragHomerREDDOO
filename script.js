const Title = document.getElementById("Title");
const Home = document.getElementById("button1");
const Dashboard = document.getElementById("button2");
const Settings = document.getElementById("button3");
const PrivacyPolicy = document.getElementById("button4");
const Contact = document.getElementById("button5");
const unityCanvas = document.getElementById("unity-canvas");
const volumeSlider = document.getElementById("volumeSlider");
const Volume = document.getElementById("Volume");
const audioCtx = new AudioContext();
const gain = audioCtx.createGain();
const ExampleGive = document.getElementById("Dashboard Title");
const AudioSettings = document.getElementById("AudioSettings");
const ContactText = document.getElementById("ContactText");
const PrivacyPolicyText = document.getElementById("PrivacyPolicyText");

Home.addEventListener("click", () => {
    Title.scrollIntoView({behavior: "smooth"});
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
    ExampleGive.scrollIntoView({behavior: "smooth"});
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
    AudioSettings.scrollIntoView({behavior: "smooth"});
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
PrivacyPolicy.addEventListener("click", () => {
    PrivacyPolicyText.scrollIntoView({behavior: "smooth"});
    const tween = PrivacyPolicy.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0, -10px)' },
], {
    duration: 250,
    iterations: 2,
    direction: "alternate",
    easing: "ease-out"
});
});
Contact.addEventListener("click", () => {
    ContactText.scrollIntoView({behavior: "smooth"});
    const tween = Contact.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0, -10px)' },
], {
    duration: 250,
    iterations: 2,
    direction: "alternate",
    easing: "ease-out"
});
});





volumeSlider.addEventListener("input", function() {
    Volume.textContent = "Volume: " + volumeSlider.value;
    gain.gain.value = volumeSlider.value / 100;
});
