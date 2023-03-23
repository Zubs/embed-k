function loadStyles () {
    let head = document.querySelector('head');
    head.innerHTML += `
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    `;
}

// function loadScripts () {
//     const head = document.querySelector('head');
//     head.innerHTML += `
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
//     `;
// }

function loadContent () {
    let target = document.getElementById('gafarKey');
    target.innerHTML = `
        <div class="py-12">
            <section class="relative max-w-7xl mx-auto">
                <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <div>
                        <div class="flex flex-col shadow-lg">
                            <div class="bg-white p-6 flex justify-between">
                                <img src="../img/logo.png" alt="" style="width: 80px; height: 20px;">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 12px; cursor: pointer" onclick="toggleGetTicketButton()">
                                    <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                </svg>
                            </div>
                            <div class="">
                                <div class="relative">
                                    <img
                                        class="h-32 w-full"
                                        src="../img/bg.png"
                                        alt=""
                                        style="width: 388px; height: 116px;"
                                    />
                                </div>
                                <div class="-mt-24 z-50 absolute">
                                    <p class="font-bold text-2xl px-4 text-wrap text-white">
                                        ABC FESTIVAL OF<br />
                                        GOATS
                                    </p>
                                </div>
                                <li class="flex shadow-sm rounded-md" id="eventDateAndTimeSection">
                                    <div class="flex bg-black h-20 justify-evenly w-full text-white text-sm font-medium">
                                        <div class="grid grid-cols-2 gap-20">
                                            <div class="">
                                                <p class="text-sm font-medium py-3 text-white">
                                                    Online Shopping
                                                </p>
                                                <p class="text-sm font-medium text-white">
                                                    3, Park Steet off, Ojoo
                                                </p>
                                            </div>
                                            <div class="">
                                                <p class="text-sm font-medium py-3 text-white">
                                                    19:00 CAT Prompt
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div class="bg-white p-6 flex flex-col justify-center" id="getTicketButtonSection">
                                <div class="my-6">
                                    <button
                                        type="button"
                                        class="w-full text-center py-3 border border-transparent text-base font-bold shadow-sm text-white bg-black hover:bg-black focus:outline-none"
                                    >
                                        <span class="text-center"> Get Ticket </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function toggleGetTicketButton() {
    const getTicketButtonSection = document.querySelector('#getTicketButtonSection');
    const eventDateAndTimeSection = document.querySelector('#eventDateAndTimeSection');

    if (getTicketButtonSection.style.display === 'none') {
        getTicketButtonSection.style.display = 'block';
        eventDateAndTimeSection.style.display = 'block';
    } else {
        getTicketButtonSection.style.display = 'none';
        eventDateAndTimeSection.style.display = 'none';
    }
}

// function pay () {
//     const modal = document.querySelector('.modal-parent')
//     modal.style.display = 'block'
// }

window.addEventListener('load', async function () {
    await loadStyles();
    await loadContent();
    // await loadScripts();
})
