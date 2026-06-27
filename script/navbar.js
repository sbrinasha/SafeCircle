/**
 * Renders the reusable navbar across all pages
 * Call this function in any page where you want the navbar
 * @param {string} containerId - ID of the element where navbar will be inserted
 * @param {string} activePage - Current page ('home', 'circles', 'messages', 'profile')
 */
function renderNavbar(containerId, activePage = 'home') {
    const navbarHTML = `
        <nav class="fixed sm:static bottom-0 left-0 right-0 sm:relative bg-white border-t border-orange-pastel p-4 -mx-6 sm:-mx-8 px-6 sm:px-8">
            <div class="flex items-center justify-center gap-2">
                <!-- Left Buttons -->
                <div class="flex gap-2 flex-1">
                    <button
                        class="flex-1 flex flex-col items-center justify-center min-h-16 rounded-xl hover:bg-orange-50 transition-colors navbar-btn"
                        data-page="home"
                        title="Home"
                        onclick="window.location.href = 'home.html'">
                        <svg class="w-6 h-6 ${activePage === 'home' ? 'text-orange-accent' : 'text-gray-500'} flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h3m10-11l2 3m-2-3V9m0 11V9m0 0N5 9m14 0a1 1 0 001-1V5a1 1 0 00-1-1h-3m-6 0a1 1 0 00-1 1v3m0 6a1 1 0 001 1h3m-10 0a1 1 0 001-1v-3m0-6a1 1 0 00-1-1H5a1 1 0 00-1 1v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-1V3m0 0h-4V1m0 0H9">
                            </path>
                        </svg>
                        <span class="text-xs text-gray-600 mt-1">Home</span>
                    </button>
                    <button
                        class="flex-1 flex flex-col items-center justify-center min-h-16 rounded-xl hover:bg-orange-50 transition-colors navbar-btn"
                        data-page="circles"
                        title="Circles"
                        onclick="window.location.href = 'circle.html'">
                        <svg class="w-6 h-6 ${activePage === 'circle' ? 'text-orange-accent' : 'text-gray-500'} flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <span class="text-xs text-gray-600 mt-1">Circles</span>
                    </button>
                </div>

                <!-- Center Main Button -->
                <button
                    class="flex flex-col items-center justify-center min-h-16 rounded-xl bg-gradient-to-r from-orange-accent to-orange-dark text-white shadow-lg hover:shadow-xl transition-shadow transform -translate-y-3 flex-shrink-0 px-3"
                    title="Alert Scam"
                    onclick="window.location.href = 'alert-1.html'">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                    </svg>
                    <span class="text-xs font-semibold mt-1">Alert Scam</span>
                </button>

                <!-- Right Buttons -->
                <div class="flex gap-2 flex-1">
                    <button
                        class="flex-1 flex flex-col items-center justify-center min-h-16 rounded-xl hover:bg-orange-50 transition-colors navbar-btn"
                        data-page="reports"
                        title="Reports"
                        onclick="window.location.href = 'reports.html'">
                        <svg class="w-6 h-6 ${activePage === 'reports' ? 'text-orange-accent' : 'text-gray-500'} flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span class="text-xs text-gray-600 mt-1">Reports</span>
                    </button>
                    <button
                        class="flex-1 flex flex-col items-center justify-center min-h-16 rounded-xl hover:bg-orange-50 transition-colors navbar-btn"
                        data-page="kiko"
                        title="Kiko"
                        onclick="window.location.href = 'kiko.html'">
                        <svg class="w-6 h-6 ${activePage === 'kiko' ? 'text-orange-accent' : 'text-gray-500'} flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        <span class="text-xs text-gray-600 mt-1">Kiko</span>
                    </button>
                </div>
            </div>
        </nav>
    `;

    // Insert navbar into container
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = navbarHTML;
    }
}
