function loadStyles() {
  let head = document.querySelector("head");
  head.innerHTML += `
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    `;
}

let modalState = 1;
let standardTicketCount = 0;
let VIPTicketCount = 0;
let VVIPTicketCount = 0;
let totalTicketCount = 0;
let totalTicketCost = 0;

let user = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null
}

function updateUserDetail(value, type) {
  user[type] = value;

  const billingProfileSubmitButton = document.querySelector('#billingProfileSubmitButton');

  if (user.firstName && user.lastName && user.email && user.phone) {
    billingProfileSubmitButton.disabled = false;
    billingProfileSubmitButton.classList.remove('bg-gray-500');
    billingProfileSubmitButton.classList.remove('hover:bg-gray-500');
    billingProfileSubmitButton.classList.add('bg-black');
    billingProfileSubmitButton.classList.add('hover:bg-black');
  }
}

function loadUserDetails() {
  document.querySelector('#fullname-display').innerHTML = `${ user.firstName } ${ user.lastName }`;
  document.querySelector('#phone-display').innerHTML = `${ user.phone }`;
  document.querySelector('#email-display').innerHTML = `${ user.email }`;
  document.querySelector('#product-list-total').innerHTML = `₦${ totalTicketCost }`;

  if (standardTicketCount > 0) {
    document.querySelector('#product-list').innerHTML += `<dt class="text-sm">Standard x ${ standardTicketCount }</dt>`;
    document.querySelector('#product-list-subtotals').innerHTML += `<dd class="text-sm">₦${ standardTicketCount * 10000 }</dd>`;
  }

  if (VIPTicketCount > 0) {
    document.querySelector('#product-list').innerHTML += `<dt class="text-sm">VIP x ${ VIPTicketCount }</dt>`;
    document.querySelector('#product-list-subtotals').innerHTML += `<dd class="text-sm">₦${ VIPTicketCount * 50000 }</dd>`;
  }

  if (VVIPTicketCount > 0) {
    document.querySelector('#product-list').innerHTML += `<dt class="text-sm">VVIP x ${ VVIPTicketCount }</dt>`;
    document.querySelector('#product-list-subtotals').innerHTML += `<dd class="text-sm">₦${ VVIPTicketCount * 100000 }</dd>`;
  }
}

function updateTicketCount(value, type) {
  switch (type) {
    case 'standard':
      standardTicketCount += value;
      if (standardTicketCount <= 0) standardTicketCount = 0;
      else if (standardTicketCount >= 100) standardTicketCount = 100;
      document.querySelector("#standard-ticket-count").innerHTML = standardTicketCount;
      break;
    case 'vip':
      VIPTicketCount += value;
      if (VIPTicketCount <= 0) VIPTicketCount = 0;
      else if (VIPTicketCount >= 50) VIPTicketCount = 50;
      document.querySelector("#vip-ticket-count").innerHTML = VIPTicketCount;
      break;
    case 'vvip':
      VVIPTicketCount += value;
      if (VVIPTicketCount <= 0) VVIPTicketCount = 0;
      else if (VVIPTicketCount >= 5) VVIPTicketCount = 5;
      document.querySelector("#vvip-ticket-count").innerHTML = VVIPTicketCount;
      break;
  }

  totalTicketCount = standardTicketCount + VIPTicketCount + VVIPTicketCount;

  const selectTicketsSubmitButton = document.querySelector('#selectTicketsSubmitButton');

  if (totalTicketCount > 0) {
    selectTicketsSubmitButton.classList.remove('bg-gray-500');
    selectTicketsSubmitButton.classList.add('bg-black');
    selectTicketsSubmitButton.disabled = false;
  } else {
    selectTicketsSubmitButton.classList.add('bg-gray-500');
    selectTicketsSubmitButton.classList.remove('bg-black');
    selectTicketsSubmitButton.disable();
  }
  document.querySelector("#total-ticket-count").innerHTML = totalTicketCount;
  totalTicketCost = (standardTicketCount * 10000) + (VIPTicketCount * 50000) + (VVIPTicketCount * 100000);
  document.querySelector("#total-ticket-cost").innerHTML = `₦${totalTicketCost}`;
}

function nextProcess() {
  modalState++;
  getModalScreenContent();
  if (modalState === 3) {
    loadUserDetails();
  }
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
  }, 500);
}

function loadContent() {
  let target = document.getElementById("gafarKey");
  target.innerHTML = `
        <div class="px-4 flex items-center justify-between h-screen mx-auto">
            <section class="relative max-w-7xl mx-auto" style="max-width: 387px">
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
                                        <div class="grid grid-cols-2">
                                            <div class="">
                                                <p class="text-sm font-medium py-3 text-white flex items-center">
                                                  <svg style="disp" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.1719 2.50065H16.5052C16.7262 2.50065 16.9382 2.58845 17.0945 2.74473C17.2507 2.90101 17.3385 3.11297 17.3385 3.33398V16.6673C17.3385 16.8883 17.2507 17.1003 17.0945 17.2566C16.9382 17.4129 16.7262 17.5007 16.5052 17.5007H1.50521C1.28419 17.5007 1.07223 17.4129 0.915953 17.2566C0.759672 17.1003 0.671875 16.8883 0.671875 16.6673V3.33398C0.671875 3.11297 0.759672 2.90101 0.915953 2.74473C1.07223 2.58845 1.28419 2.50065 1.50521 2.50065H4.83854V0.833984H6.50521V2.50065H11.5052V0.833984H13.1719V2.50065ZM15.6719 9.16732H2.33854V15.834H15.6719V9.16732ZM11.5052 4.16732H6.50521V5.83398H4.83854V4.16732H2.33854V7.50065H15.6719V4.16732H13.1719V5.83398H11.5052V4.16732ZM4.00521 10.834H5.67188V12.5007H4.00521V10.834ZM8.17188 10.834H9.83854V12.5007H8.17188V10.834ZM12.3385 10.834H14.0052V12.5007H12.3385V10.834Z" fill="white"/>
                                                  </svg>&nbsp;
                                                  
                                                  Saturday, Sept 6th
                                                </p>
                                                <p class="text-sm font-medium text-white flex items-center">
                                                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3033 13.4693L8 18.7726L2.69667 13.4693C1.64779 12.4204 0.933489 11.084 0.644107 9.62916C0.354725 8.1743 0.503256 6.66631 1.07092 5.29587C1.63858 3.92543 2.59987 2.75409 3.83324 1.92999C5.0666 1.10588 6.51665 0.666016 8 0.666016C9.48336 0.666016 10.9334 1.10588 12.1668 1.92999C13.4001 2.75409 14.3614 3.92543 14.9291 5.29587C15.4968 6.66631 15.6453 8.1743 15.3559 9.62916C15.0665 11.084 14.3522 12.4204 13.3033 13.4693ZM8 11.4993C8.88406 11.4993 9.7319 11.1481 10.357 10.523C10.9821 9.89785 11.3333 9.05 11.3333 8.16595C11.3333 7.2819 10.9821 6.43405 10.357 5.80893C9.7319 5.18381 8.88406 4.83262 8 4.83262C7.11595 4.83262 6.2681 5.18381 5.64298 5.80893C5.01786 6.43405 4.66667 7.2819 4.66667 8.16595C4.66667 9.05 5.01786 9.89785 5.64298 10.523C6.2681 11.1481 7.11595 11.4993 8 11.4993ZM8 9.83262C7.55798 9.83262 7.13405 9.65702 6.82149 9.34446C6.50893 9.0319 6.33334 8.60798 6.33334 8.16595C6.33334 7.72392 6.50893 7.3 6.82149 6.98744C7.13405 6.67488 7.55798 6.49928 8 6.49928C8.44203 6.49928 8.86595 6.67488 9.17851 6.98744C9.49108 7.3 9.66667 7.72392 9.66667 8.16595C9.66667 8.60798 9.49108 9.0319 9.17851 9.34446C8.86595 9.65702 8.44203 9.83262 8 9.83262Z" fill="white"/>
                                                  </svg>&nbsp;
                                                
                                                  Eko Hotels and Suites, Lagos
                                                </p>
                                            </div>
                                            <div class="">
                                                <p class="text-sm font-medium py-3 text-white flex items-center">
                                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="white"/>
                                                  </svg>&nbsp;                                                  
                                                
                                                  10:00AM
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
            class="relative inline-block align-bottom bg-white p-2 pb-4 text-left
            overflow-hidden  shadow-xl transform transition-all sm:my-8 sm:align-middle 
            sm:max-w-sm sm:w-full sm:p-6"
            style="width: 388px;"
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
            <section class="relative mx-auto">
              <div class="flex flex-col bg-white">
                    <div class="bg-white p-2 flex justify-between">
                      <img
                        src="../img/logo.png"
                        alt=""
                        style="width: 80px; height: 20px"
                      />
                    </div>
                    <hr>
                    <div class="pt-8">
                      <div class="relative">
                        <li class="col-span-1 flex mx-2">
                          <img
                            class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium"
                            src="../img/bg.png"
                            alt=""
                            style="width: 106px; height: 85px;"
                          />
                          <div
                            class="flex-1 flex justify-between bg-white truncate"
                          >
                            <div class="px-2 pt-4">
                              <p class="text-sm text-wrap font-bold">
                                ABC FESTIVAL OF GOATS
                              </p>
                              <div class="grid grid-cols-2 gap-4">
                                <div class="">
                                  <p class="text-xs font-medium flex items-center text-black">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.1641 2.50065H16.4974C16.7184 2.50065 16.9304 2.58845 17.0867 2.74473C17.2429 2.90101 17.3307 3.11297 17.3307 3.33398V16.6673C17.3307 16.8883 17.2429 17.1003 17.0867 17.2566C16.9304 17.4129 16.7184 17.5007 16.4974 17.5007H1.4974C1.27638 17.5007 1.06442 17.4129 0.90814 17.2566C0.75186 17.1003 0.664063 16.8883 0.664062 16.6673V3.33398C0.664062 3.11297 0.75186 2.90101 0.90814 2.74473C1.06442 2.58845 1.27638 2.50065 1.4974 2.50065H4.83073V0.833984H6.4974V2.50065H11.4974V0.833984H13.1641V2.50065ZM15.6641 9.16732H2.33073V15.834H15.6641V9.16732ZM11.4974 4.16732H6.4974V5.83398H4.83073V4.16732H2.33073V7.50065H15.6641V4.16732H13.1641V5.83398H11.4974V4.16732ZM3.9974 10.834H5.66406V12.5007H3.9974V10.834ZM8.16406 10.834H9.83073V12.5007H8.16406V10.834ZM12.3307 10.834H13.9974V12.5007H12.3307V10.834Z" fill="black"/>
                                    </svg>&nbsp;
                                    
                                    Saturday, Sept 6th
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
                    <hr>
                    <div class="bg-white flex flex-col justify-center">
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
                                                  onclick="updateTicketCount(-1, 'standard')"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                  id="standard-ticket-count"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                  onclick="updateTicketCount(1, 'standard')"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦10,000
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
                                                  onclick="updateTicketCount(-1, 'vip')"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                  id="vip-ticket-count"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                  onclick="updateTicketCount(1, 'vip')"
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p class="text-lg text-black font-bold">
                                          ₦50,000
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
                                                  onclick="updateTicketCount(-1, 'vvip')"
                                                >
                                                  -
                                                </button>
                                              </div>
                                              <div>
                                                <h2
                                                  class="text-2xl font-bold text-black"
                                                  id="vvip-ticket-count"
                                                >
                                                  0
                                                </h2>
                                              </div>
                                              <div>
                                                <button
                                                  class="text-lg text-black px-4 cursor-pointer"
                                                  onclick="updateTicketCount(1, 'vvip')"
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
                                <p>Quantity: <span id="total-ticket-count"> 0</span></p>

                                <p class="font-bold text-lg">
                                  Total : <span id="total-ticket-cost"> ₦0 </span>
                                </p>
                              </div>
                              <div>
                                <button
                                  onclick="nextProcess(2)"
                                  class="flex items-center justify-center bg-gray-500 py-3 px-5 text-base font-medium text-white"
                                  id="selectTicketsSubmitButton"
                                  disabled
                                >
                                    Get Tickets
                                </button>
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
            <section class="relative mx-auto">
              <div class="flex flex-col bg-white">
                      <div class="bg-white p-2 flex justify-between">
                        <img
                          src="../img/logo.png"
                          alt=""
                          style="width: 80px; height: 20px"
                        />
                      </div>
                      <hr>
                      <div class="pt-8">
                        <div class="relative">
                          <li class="col-span-1 flex mx-2">
                            <img
                              class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium"
                              src="../img/bg.png"
                              alt=""
                              style="width: 106px; height: 85px;"
                            />
                            <div
                              class="flex-1 flex justify-between bg-white truncate"
                            >
                              <div class="px-2 pt-4">
                                <p class="text-sm text-wrap font-bold">
                                  ABC FESTIVAL OF GOATS
                                </p>
                                <div class="grid grid-cols-2 gap-4">
                                  <div class="">
                                    <p class="text-xs font-medium flex items-center text-black">
                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1641 2.50065H16.4974C16.7184 2.50065 16.9304 2.58845 17.0867 2.74473C17.2429 2.90101 17.3307 3.11297 17.3307 3.33398V16.6673C17.3307 16.8883 17.2429 17.1003 17.0867 17.2566C16.9304 17.4129 16.7184 17.5007 16.4974 17.5007H1.4974C1.27638 17.5007 1.06442 17.4129 0.90814 17.2566C0.75186 17.1003 0.664063 16.8883 0.664062 16.6673V3.33398C0.664062 3.11297 0.75186 2.90101 0.90814 2.74473C1.06442 2.58845 1.27638 2.50065 1.4974 2.50065H4.83073V0.833984H6.4974V2.50065H11.4974V0.833984H13.1641V2.50065ZM15.6641 9.16732H2.33073V15.834H15.6641V9.16732ZM11.4974 4.16732H6.4974V5.83398H4.83073V4.16732H2.33073V7.50065H15.6641V4.16732H13.1641V5.83398H11.4974V4.16732ZM3.9974 10.834H5.66406V12.5007H3.9974V10.834ZM8.16406 10.834H9.83073V12.5007H8.16406V10.834ZM12.3307 10.834H13.9974V12.5007H12.3307V10.834Z" fill="black"/>
                                      </svg>&nbsp;
                                      
                                      Saturday, Sept 6th
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
                      <hr>
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
                                        style="background: #0000000D"
                                        oninput="updateUserDetail(this.value, 'firstName')"
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
                                        style="background: #0000000D"
                                        oninput="updateUserDetail(this.value, 'lastName')"
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
                                        style="background: #0000000D"
                                        oninput="updateUserDetail(this.value, 'email')"
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
                                        style="background: #0000000D"
                                        oninput="updateUserDetail(this.value, 'phone')"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
  
                            <div class="py-6 px-4 sm:px-6">
                              <div class="mt-3">
                                <button
                                  class="w-full text-center py-3 border border-transparent text-base font-bold shadow-sm text-white bg-gray-500 hover:bg-gray-500 focus:outline-none"
                                  onclick="nextProcess(3)"
                                  id="billingProfileSubmitButton"
                                  disabled
                                >Continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </section>
`;

const thirdModalScreen = `
            <section class="relative mx-auto">
              <div class="flex flex-col bg-white">
                    <div class="bg-white p-2 flex justify-between">
                      <img
                        src="../img/logo.png"
                        alt=""
                        style="width: 80px; height: 20px"
                      />
                    </div>
                    <hr>
                    <div class="pt-8">
                        <div class="relative">
                          <li class="col-span-1 flex mx-2">
                            <img
                              class="flex-shrink-0 flex items-center justify-center w-28 h-28 text-white text-sm font-medium"
                              src="../img/bg.png"
                              alt=""
                              style="width: 106px; height: 85px;"
                            />
                            <div
                              class="flex-1 flex justify-between bg-white truncate"
                            >
                              <div class="px-2 pt-4">
                                <p class="text-sm text-wrap font-bold">
                                  ABC FESTIVAL OF GOATS
                                </p>
                                <div class="grid grid-cols-2 gap-4">
                                  <div class="">
                                    <p class="text-xs font-medium flex items-center text-black">
                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1641 2.50065H16.4974C16.7184 2.50065 16.9304 2.58845 17.0867 2.74473C17.2429 2.90101 17.3307 3.11297 17.3307 3.33398V16.6673C17.3307 16.8883 17.2429 17.1003 17.0867 17.2566C16.9304 17.4129 16.7184 17.5007 16.4974 17.5007H1.4974C1.27638 17.5007 1.06442 17.4129 0.90814 17.2566C0.75186 17.1003 0.664063 16.8883 0.664062 16.6673V3.33398C0.664062 3.11297 0.75186 2.90101 0.90814 2.74473C1.06442 2.58845 1.27638 2.50065 1.4974 2.50065H4.83073V0.833984H6.4974V2.50065H11.4974V0.833984H13.1641V2.50065ZM15.6641 9.16732H2.33073V15.834H15.6641V9.16732ZM11.4974 4.16732H6.4974V5.83398H4.83073V4.16732H2.33073V7.50065H15.6641V4.16732H13.1641V5.83398H11.4974V4.16732ZM3.9974 10.834H5.66406V12.5007H3.9974V10.834ZM8.16406 10.834H9.83073V12.5007H8.16406V10.834ZM12.3307 10.834H13.9974V12.5007H12.3307V10.834Z" fill="black"/>
                                      </svg>&nbsp;
                                      
                                      Saturday, Sept 6th
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
                    <hr>
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
                                  <p id="fullname-display">Joy Uwaoma</p>
                                </div>

                                <div class="font-bold">
                                  <p id="phone-display">097735718037518</p>
                                </div>

                                <div class="sm:col-span-2 font-bold">
                                  <p id="email-display">joy@gmail.com</p>
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
                                <div class="py-2" id="product-list"></div>

                                <div class="py-2" id="product-list-subtotals"></div>
                                
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
                                  <dd class="text-2xl" id="product-list-total">₦10000.00</dd>
                                </div>
                              </div>
                            </dl>
                          </div>

                          <div class="py-6 px-4 flex flex-col md:flex-row justify-between sm:px-6"> 
                            <div class="mt-3">
                              <button
                                onclick="endProcess()"
                                class="w-full text-center py-3 border border-transparent text-base font-bold shadow-sm text-white bg-black hover:bg-black focus:outline-none"
                                >Checkout</button
                              >
                            </div>
                            <div class="mt-3">
                              <button
                                onclick="previousProcess(3)"
                                class="flex items-center justify-center border-2-black border border-black-200 bg-white px-6 py-3 text-base font-bold text-black"
                                >Back</button
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </section>
`;
