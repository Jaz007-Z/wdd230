const d = new Date();
let year = d.getFullYear();

// const copyright = document.querySelector('#copyright');
// copyright.innerHTML = `&copy; ${year} | James A. Zimsky | VA`;


const lastUpdated = document.querySelector('#lastMod');
lastUpdated.innerHTML = `Compiled: ${document.lastModified}</strong>`;

