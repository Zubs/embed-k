function loadStyles() {
  let head = document.querySelector("head");
  head.innerHTML += `
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    `;
}

let modalState = 1;

function nextProcess() {
  modalState++;
  getModalScreenContent();
}

function previousProcess() {
  modalState--;
  getModalScreenContent();
}

function endProcess() {
  const modal = document.querySelector("#modal-screen");
  modal.classList.add("hidden");
  modal.classList.remove("fixed");
  modalState = 1;
}

function getModalScreenContent() {
  let modalScreenContent = document.querySelector("#modal-content");

  switch (modalState) {
    case 1:
      return (modalScreenContent.innerHTML = firstModalScreen);
    case 2:
      return (modalScreenContent.innerHTML = secondModalScreen);
    case 3:
      return (modalScreenContent.innerHTML = thirdModalScreen);
    case 4:
      return (modalScreenContent.innerHTML = fourthModalScreen);
    default:
      return endProcess();
  }
}

function startTicketPurchase() {
  const modal = document.querySelector("#modal-screen");
  const button = document.querySelector("#purchaseButton");
  button.textContent = "Loading...";

  setTimeout(() => {
    // DO SOME API CALLS
    modal.classList.remove("hidden");
    modal.classList.add("fixed");
    getModalScreenContent();
    button.innerHTML = `
        <span class="text-center"> Get Ticket</span>
    `;
  }, 1500);
}

function loadContent() {
  let target = document.getElementById("gafarKey");
  target.innerHTML = `
        <div class="px-4 flex items-center justify-between h-screen mx-auto">
            <section class="relative max-w-7xl mx-auto">
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
                                        id="purchaseButton"
                                        onclick="startTicketPurchase()"
                                        class="w-full text-center py-3 border border-transparent text-base font-bold shadow-sm text-white bg-black hover:bg-black focus:outline-none"
                                    >
                                        <span class="text-center"> Get Ticket </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
        <div
            role="dialog"   
            id="modal-screen"
            aria-modal="true"
            class="hidden z-50 inset-0 overflow-y-auto"
        >
        <div
          class="flex  ease-out duration-300 items-end justify-center 
          min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div
            aria-hidden="true"
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
          <span
            aria-hidden="true"
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            >&#8203;
          </span>
          <div
            id="modal-content"
            class="relative inline-block align-bottom bg-white rounded-lg p-2 pb-4 text-left
            overflow-hidden  shadow-xl transform transition-all sm:my-8 sm:align-middle 
            sm:max-w-sm sm:w-full sm:p-6"
          >
          </div>
        </div>
      </div>
    `;
}

function toggleGetTicketButton() {
  const getTicketButtonSection = document.querySelector(
    "#getTicketButtonSection"
  );
  const eventDateAndTimeSection = document.querySelector(
    "#eventDateAndTimeSection"
  );

  if (getTicketButtonSection.style.display === "none") {
    getTicketButtonSection.style.display = "block";
    eventDateAndTimeSection.style.display = "block";
  } else {
    getTicketButtonSection.style.display = "none";
    eventDateAndTimeSection.style.display = "none";
  }
}

window.addEventListener("load", async function () {
  await loadStyles();
  await loadContent();
});

/******************** HTML TEMPLATES *************************** */
const firstModalScreen = `
            <section class="relative max-w-7xl mx-auto">
              <div class="max-w-lg lg:max-w-none">
                <div>
                  <div class="flex flex-col shadow-lg bg-white rounded-lg">
                    <div class="bg-white p-2 flex justify-between">
                      <img
                        src="../img/logo.png"
                        alt=""
                        style="width: 80px; height: 20px"
                      />
                    </div>
                    <div class="pt-8">
                      <div class="relative">
                        <li class="col-span-1 flex shadow-sm rounded-md mx-2">
                          <img
                            class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium rounded-l-md"
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                          />
                          <div
                            class="flex-1 flex justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                          >
                            <div class="px-2 pt-4">
                              <p class="text-sm text-wrap font-bold">
                                ABC FESTIVAL OF GOATS
                              </p>
                              <div class="grid grid-cols-2 gap-4">
                                <div class="">
                                  <p class="text-xs font-medium">
                                    Online Shopping
                                  </p>
                                  <p class="text-xs font-medium">
                                    3, Park Steet off, Ojoo
                                  </p>
                                </div>
                                <div class="">
                                  <p class="text-xs font-medium">
                                    19:00 CAT Prompt
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div class="bg-white py-6 flex flex-col justify-center">
                      <div class="pointer-events-auto">
                        <div class="flex h-full flex-col bg-white">
                          <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                              <h2
                                class="text-2xl font-bold text-gray-900 divide-y divide-gray-200"
                                id="slide-over-title"
                              >
                                Tickets
                              </h2>
                            </div>

                            <div class="mt-8">
                              <div class="flow-root">
                                <ul
                                  role="list"
                                  class="-my-6 divide-y divide-gray-200"
                                >
                                  <li class="flex py-2">
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div
                                          class="flex justify-between text-base font-medium text-black"
                                        >
                                          <p class="font-bold">
                                            <a href="#">Standard </a>
                                          </p>
                                          <div class="ml-4">
                                            <div
                                              class="flex justify-center items-center"
                                            >
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦10000
                                        </p>
                                        <p class="text-xs text-black">
                                          100 Available
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="flex py-2">
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div
                                          class="flex justify-between text-base font-medium text-black"
                                        >
                                          <p class="font-bold">
                                            <a href="#">VIP </a>
                                          </p>
                                          <div class="ml-4">
                                            <div
                                              class="flex justify-center items-center"
                                            >
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦50000
                                        </p>
                                        <p class="text-xs text-black">
                                          50 Available
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li class="flex py-2">
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div
                                          class="flex justify-between text-base font-medium text-black"
                                        >
                                          <p class="font-bold">
                                            <a href="#">VVIP </a>
                                          </p>
                                          <div class="ml-4">
                                            <div
                                              class="flex justify-center items-center"
                                            >
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦100000
                                        </p>
                                        <p class="text-xs text-black">
                                          5 Available
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <!-- More products... -->
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            class="border-t border-gray-200 py-6 px-4 sm:px-6"
                          >
                            <div
                              class="flex justify-between text-base font-medium text-gray-900"
                            >
                              <div>
                                <p>Quantity: <span> ₦ 0</span></p>

                                <p class="font-bold text-lg">
                                  Total : <span> ₦ 0 </span>
                                </p>
                              </div>
                              <div>
                                <button
                                    onclick="nextProcess(2)"
                                    class="flex items-center justify-center bg-gray-500 py-3 px-5 text-base font-medium text-white">
                                    Get Tickets
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
`;

const secondModalScreen = `
            <section class="relative max-w-7xl mx-auto">
              <div class="max-w-lg mx-auto">
                <div>
                  <div class="flex flex-col shadow-lg bg-white">
                    <div class="bg-white p-2 flex justify-between">
                      <img
                        src="../img/logo.png"
                        alt=""
                        style="width: 80px; height: 20px"
                      />
                    </div>
                    <div class="pt-8">
                      <div class="relative">
                        <li class="col-span-1 flex shadow-sm rounded-md mx-2">
                          <img
                            class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium rounded-l-md"
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                          />
                          <div
                            class="flex-1 flex justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                          >
                            <div class="px-2 pt-4">
                              <p class="text-sm text-wrap font-bold">
                                ABC FESTIVAL OF GOATS
                              </p>
                              <div class="grid grid-cols-2 gap-4">
                                <div class="">
                                  <p class="text-xs font-medium">
                                    Online Shopping
                                  </p>
                                  <p class="text-xs font-medium">
                                    3, Park Steet off, Ojoo
                                  </p>
                                </div>
                                <div class="">
                                  <p class="text-xs font-medium">
                                    19:00 CAT Prompt
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div class="bg-white py-6 flex flex-col justify-center">
                      <div class="pointer-events-auto">
                        <div class="flex h-full flex-col bg-white">
                          <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                              <h2
                                class="text-2xl font-bold text-gray-900 divide-y divide-gray-200"
                                id="slide-over-title"
                              >
                                Tickets
                              </h2>
                            </div>

                            <div class="mt-8">
                              <div class="flow-root">
                                <ul
                                  role="list"
                                  class="-my-6 divide-y divide-gray-200"
                                >
                                  <li class="flex py-2">
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div
                                          class="flex justify-between text-base font-medium text-black"
                                        >
                                          <p class="font-bold">
                                            <a href="#">Standard </a>
                                          </p>
                                          <div class="ml-4">
                                            <div
                                              class="flex justify-center items-center"
                                            >
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦10000
                                        </p>
                                        <p class="text-xs text-black">
                                          100 Available
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="flex py-2">
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div
                                          class="flex justify-between text-base font-medium text-black"
                                        >
                                          <p class="font-bold">
                                            <a href="#">VIP </a>
                                          </p>
                                          <div class="ml-4">
                                            <div
                                              class="flex justify-center items-center"
                                            >
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦50000
                                        </p>
                                        <p class="text-xs text-black">
                                          50 Available
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li class="flex py-2">
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div
                                          class="flex justify-between text-base font-medium text-black"
                                        >
                                          <p class="font-bold">
                                            <a href="#">VVIP </a>
                                          </p>
                                          <div class="ml-4">
                                            <div
                                              class="flex justify-center items-center"
                                            >
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦100000
                                        </p>
                                        <p class="text-xs text-black">
                                          5 Available
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <!-- More products... -->
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            class="border-t border-gray-200 py-6 px-4 sm:px-6"
                          >
                            <div
                              class="flex justify-between text-base font-medium text-gray-900"
                            >
                              <div>
                                <p>Quantity: <span>₦ 1</span></p>

                                <p class="font-bold text-lg">
                                  Total : <span> ₦ 10000 </span>
                                </p>
                              </div>
                              <div>
                                  <button
                                    onclick="nextProcess(3)"
                                    class="flex items-center justify-center bg-black py-3 px-5 text-base font-medium text-white"
                                    >Get Tickets</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
`;

const thirdModalScreen = `
            <section class="relative max-w-7xl mx-auto">
              <div class="max-w-lg mx-auto">
                <div>
                  <div class="flex flex-col shadow-lg bg-white">
                    <div class="bg-white p-2 flex justify-between">
                      <img
                        src="../img/logo.png"
                        alt=""
                        style="width: 80px; height: 20px"
                      />
                    </div>
                    <div class="pt-8">
                      <div class="relative">
                        <li class="col-span-1 flex shadow-sm rounded-md mx-2">
                          <img
                            class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium rounded-l-md"
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                          />
                          <div
                            class="flex-1 flex justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                          >
                            <div class="px-2 pt-4">
                              <p class="text-sm text-wrap font-bold">
                                ABC FESTIVAL OF GOATS
                              </p>
                              <div class="grid grid-cols-2 gap-4">
                                <div class="">
                                  <p class="text-xs font-medium">
                                    Online Shopping
                                  </p>
                                  <p class="text-xs font-medium">
                                    3, Park Steet off, Ojoo
                                  </p>
                                </div>
                                <div class="">
                                  <p class="text-xs font-medium">
                                    19:00 CAT Prompt
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div class="bg-white py-6 flex flex-col justify-center">
                      <div class="pointer-events-auto">
                        <div class="flex h-full flex-col bg-white">
                          <div class="flex-1 overflow-y-auto py-2 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                              <h2
                                class="text-2xl font-bold text-gray-900"
                                id="slide-over-title"
                              >
                                Billing Information
                              </h2>
                            </div>
                            <div class="mt-2 pt-2">
                              <div
                                class="mt-4 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4"
                              >
                                <div>
                                  <div class="mt-1">
                                    <input
                                      type="text"
                                      id="first-name"
                                      placeholder="First Name"
                                      name="first-name"
                                      autocomplete="given-name"
                                      class="block w-full border-gray-300 rounded-md shadow-sm p-2 outline-none sm:text-sm"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <div class="mt-1">
                                    <input
                                      type="text"
                                      id="last-name"
                                      name="last-name"
                                      placeholder="Last Name"
                                      autocomplete="family-name"
                                      class="block w-full border-gray-300 rounded-md shadow-sm outline-none p-2 sm:text-sm"
                                    />
                                  </div>
                                </div>

                                <div class="sm:col-span-2">
                                  <div class="mt-1">
                                    <input
                                      type="text"
                                      placeholder="Email"
                                      name="email"
                                      id="email"
                                      class="block w-full border-gray-300 rounded-md shadow-sm p-2 sm:text-sm"
                                    />
                                  </div>
                                </div>
                                <div class="sm:col-span-2">
                                  <div class="mt-1">
                                    <input
                                      type="text"
                                      placeholder="Phone No"
                                      name="phone"
                                      id="phone"
                                      class="block w-full border-gray-300 rounded-md shadow-sm p-2 sm:text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="py-6 px-4 sm:px-6">
                            <div class="mt-3">
                              <button
                                    onclick="nextProcess(4)"
                                class="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white"
                                >Continue</
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
`;

const fourthModalScreen = `
            <section class="relative max-w-7xl mx-auto">
              <div class="max-w-lg mx-auto">
                <div>
                  <div class="flex flex-col shadow-lg bg-white">
                    <div class="bg-white p-2 flex justify-between">
                      <img
                        src="../img/logo.png"
                        alt=""
                        style="width: 80px; height: 20px"
                      />
                    </div>
                    <div class="pt-8">
                      <div class="relative">
                        <li class="col-span-1 flex shadow-sm rounded-md mx-2">
                          <img
                            class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium rounded-l-md"
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                          />
                          <div
                            class="flex-1 flex justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                          >
                            <div class="px-2 pt-4">
                              <p class="text-sm text-wrap font-bold">
                                ABC FESTIVAL OF GOATS
                              </p>
                              <div class="grid grid-cols-2 gap-4">
                                <div class="">
                                  <p class="text-xs font-medium">
                                    Online Shopping
                                  </p>
                                  <p class="text-xs font-medium">
                                    3, Park Steet off, Ojoo
                                  </p>
                                </div>
                                <div class="">
                                  <p class="text-xs font-medium">
                                    19:00 CAT Prompt
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                    <div class="bg-white py-6 flex flex-col justify-center">
                      <div class="pointer-events-auto">
                        <div class="flex h-full flex-col bg-white">
                          <div class="flex-1 overflow-y-auto py-2 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                              <h2
                                class="text-2xl font-bold text-gray-900"
                                id="slide-over-title"
                              >
                                Preview Order
                              </h2>
                            </div>
                            <div class="py-2">
                              <div
                                class="py-4 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4"
                              >
                                <div class="font-bold">
                                  <p>Joy Uwaoma</p>
                                </div>

                                <div class="font-bold">
                                  <p>097735718037518</p>
                                </div>

                                <div class="sm:col-span-2 font-bold">
                                  <p>joy@gmail.com</p>
                                </div>
                              </div>
                            </div>

                            <dl class="-pt-3 px-1">
                              <div
                                class="py-2 grid grid-cols-1 sm:grid-cols-2 border-b border-gray-200 sm:gap-x-4"
                              >
                                <div class="">
                                  <dt class="text-sm font-bold">Product</dt>
                                </div>

                                <div class="">
                                  <dd class="text-sm font-bold">Subtotal</dd>
                                </div>
                              </div>

                              <div
                                class="py-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4"
                              >
                                <div class="py-2">
                                  <dt class="text-sm">Standard x 1</dt>
                                </div>

                                <div class="py-2">
                                  <dd class="text-sm">₦10000</dd>
                                </div>
                                <div class="py-2">
                                  <dt class="text-sm">Discount</dt>
                                </div>

                                <div class="py-2">
                                  <dd class="text-sm">₦0.00</dd>
                                </div>
                              </div>

                              <div
                                class="py-2 grid grid-cols-1 sm:grid-cols-2 border-t border-gray-200 sm:gap-x-4"
                              >
                                <div class="font-bold">
                                  <dt class="text-2xl">Total</dt>
                                </div>

                                <div class="font-bold">
                                  <dd class="text-2xl">₦10000.00</dd>
                                </div>
                              </div>
                            </dl>
                          </div>

                          <div class="py-6 px-4 flex flex-col md:flex-row justify-between sm:px-6"> 
                            <div class="mt-3">
                              <button
                                onclick="previousProcess(3)"
                                class="flex items-center justify-center border-2-black border border-black-200 bg-white px-6 py-3 text-base font-bold text-black"
                                >Back</button
                              >
                            </div>
                            <div class="mt-3">
                              <button
                                onclick="endProcess()"
                                class="flex items-center justify-center border border-transparent bg-black px-6 py-3 text-base font-medium text-white"
                                >Checkout</button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
`;
