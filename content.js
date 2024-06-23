chrome.storage.local.get(['allergens', 'customAllergens'], (result) => {
    let allergens = (result.allergens || []).concat(result.customAllergens || []);
    let pageContent = document.body.innerText.toLowerCase();
    let foundAllergens = allergens.filter(allergen => pageContent.includes(allergen.toLowerCase()));
  
    if (foundAllergens.length > 0) {
      alert('Restrictions found on this page: ' + foundAllergens.join(', '));
    } else {
      alert('No restrictions found on this page.');
    }
  });
  
