<template>

   <aside  class=" fixed top-0 pt-20 border border-r-gray-200  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Management</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

               
               <span class="flex-1 ml-3 whitespace-nowrap">Analytics</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
</svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Starred Analytics</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z"/>
  </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
            </a>
         </li>
        
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64 bg-gray-50 md:min-h-screen">
        <div class="mt-14">
            <div class="grid grid-cols-12 gap-5">
               <div class="col-span-6 md:col-span-3 p-2 border rounded-md bg-blue-50">
                    <div class="flex justify-between items-center mb-2 md:mb-4">
                        <p class="w-fit p-0.5 text-white rounded-full bg-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


                        </p>
                        <p class="text-lg font-bold">
    $11.67K
</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-xs font-semibold">Total Spend</p>
                        <p class="text-xs text-green-600">+33.45%</p>
                    </div>
                </div>

                <div class="col-span-6 md:col-span-3 p-2 border rounded-md bg-slate-100">
                    <div class="flex justify-between items-center mb-2 md:mb-4">
                        <p class="w-fit p-0.5 text-white rounded-full bg-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>



                        </p>
                        <p class="text-lg font-bold">
                           47,403
</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-xs font-semibold">Total Impressions</p>
                        <p class="text-xs text-red-600">112.4%</p>
                    </div>
                </div>

                <div class="col-span-6 md:col-span-3 p-2 border rounded-md bg-green-100">
                    <div class="flex justify-between items-center mb-2 md:mb-4">
                        <p class="w-fit p-0.5 text-white rounded-full bg-green-600">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>



                        </p>
                        <p class="text-lg font-bold">
    55.093
</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-xs font-semibold">Viewbale Impressions</p>
                        <p class="text-xs text-green-600">+62.04%</p>
                    </div>
                </div>

                <div class="col-span-6 md:col-span-3 p-2 border rounded-md bg-orange-100">
                    <div class="flex justify-between items-center mb-2 md:mb-4">
                        <p class="w-fit p-0.5 text-white rounded-full bg-orange-600">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
</svg>



                        </p>
                        <p class="text-lg font-bold">
    $12.33M
</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-xs font-semibold">Total Sales</p>
                        <p class="text-xs text-green-600">+4.46%</p>
                    </div>
                </div>


            </div>

            <div>
                <div class="grid grid-cols-12 mt-5 gap-5">
                    <section class="md:col-span-7 col-span-12">
                        <div class="grid grid-cols-12 gap-5">
                            <div class="col-span-12 md:col-span-6">
                                <div class="border bg-white p-4 rounded-2xl">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <h6 class="text-lg font-bold">allData</h6>
                                        </div>
                                        <div>

<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

                                        </div>
                                    </div>
                           
                                <div>
                                    <DoughnutChart/>
                                </div>
                                
                                
                                </div>
                            </div>

                            <div class="col-span-12 md:col-span-6">
                                <div class="border bg-white p-4 rounded-2xl">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <h6 class="text-lg font-bold">Device Type</h6>
                                        </div>
                                        <div>

<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

                                        </div>
                                    </div>
                           
                                <div>
                                    <PieChart/>
                                </div>
                                
                                
                                </div>
                            </div>
                           
                        </div>
                       
                    </section>

                   
                   
                    <section class="md:col-span-5 col-span-12">
                        <div class="border bg-white p-4 rounded-2xl h-full">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h6 class="text-lg font-bold">Impression measurement</h6>
                                    <p class="text-green-600 font-semibold md:ml-2">
                                        46,567.23
                                        <span class="text-sm text-gray-600">/per month</span>
                                        <span class="text-red-600 ml-2">-33.45%</span>
                                    </p>
                                </div>
                                <div>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
                                </div>
                            </div>
                            <div>
                                <LineChart/>
                            </div>
                         
                        </div>
                    </section>
                </div>

                <div class="grid grid-cols-12 mt-5 gap-5">
                    <section class="md:col-span-7 col-span-12">
                        <div class="border bg-white p-4 rounded-2xl">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h6 class="text-lg font-bold">Spend by Channel</h6>
                                </div>
                                <div>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
                                </div>

                            </div>
                            <BarChart/>
                        </div>
                    </section>

                    <section class="md:col-span-5 col-span-12">
                        <div class="border bg-white p-4 rounded-2xl">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h6 class="text-lg font-bold">Resonance score by creative</h6>
                                </div>
                                <div>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
                                </div>
                            </div>

                            <div class=" md:ml-16">
                                <Resonance/>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="grid grid-cols-12  mt-5 gap-5">
                    <section class="md:col-span-6 col-span-12">
                        <div class="border bg-white p-4 rounded-2xl">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h6 class="text-lg font-bold">Spend by Bubble</h6>
                                </div>
                                <div>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
    </div>
                            </div>
                            <BubbleChart/>
                        </div>
                    </section>


                    <section class="md:col-span-6 col-span-12">
                        <div class="border bg-white p-4 rounded-2xl">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h6 class="text-lg font-bold">Spend by Scatter</h6>
                                </div>
                                <div>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
    </div>
                            </div>
                            <div>
                            <ScatterChart/>
                          </div>
                        </div>
                    </section>
                </div>

                <div class="grid grid-cols-12 mt-5 gap-5">
                  <section class="md:col-span-6 col-span-12">
                    <div class="border bg-white p-4 rounded-2xl">
                      <div class="flex justify-between items-center">
                        <div>
                          <h6 class="text-lg font-bold">Spend by Radar</h6>
                        </div>
                        <div>
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
                        </div>
                      </div>
                      <RadarChart/>
                    </div>
                  </section>

                  <section class="md:col-span-6 col-span-12">
                    <div class="border bg-white p-4 rounded-2xl">
                      <div class="flex justify-between items-center">
                        <div>
                          <h6 class="text-lg font-bold">Spend by Radar</h6>
                        </div>
                        <div>
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
                        </div>
                      </div>
                     <PolarArea/>
                    </div>
                  </section>
                </div>

                <div class="border bg-white p-4 rounded-2xl mt-5">
                  <div class="flex justify-between items-center">
                    <div>
                      <h6 class="text-lg font-bold">
                        Attention units by channel and platform
                      </h6>
                    </div>
                    <div>
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="hidden text-black border border-gray-400 font-medium rounded-full text-sm px-3 py-2 text-center md:inline-flex items-center dark:bg-gray-600 dark:focus:ring-gray-800" type="button"> Last week<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
    </div>
                    </div>
                  </div>
                  <HorizontalBar/>
                </div>
            </div>
        </div>
  </div>
  
 
</template>

<script>
import DoughnutChart from './DoughnutChart.vue';
import PieChart from './PieChart.vue';
import LineChart from './LineChart.vue';
import Resonance from './Resonance.vue';
import BubbleChart from './BubbleChart.vue';
import ScatterChart from './ScatterChart.vue';
import RadarChart from './RadarChart.vue';
import PolarArea from './PolarArea.vue';
import HorizontalBar from './HorizontalBar.vue';
export default{

}
</script>

<style scoped>

</style>