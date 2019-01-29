export function availableYears(terms) {
  const available = terms
    .reduce((memo, term) => {
      if (!memo[term.attributes.schoolYear]) {
        memo[term.attributes.schoolYear] = true;
      }
      return memo;
    }, {});

  return Object.keys(available)
    .sort((a, b) => b.localeCompare(a));
}

export function sortedCategories(categories) {
  return categories
    .sort((cat1, cat2) => (cat1.attributes.name.localeCompare(cat2.attributes.name)));
}

export function sortedPeople(people, filterFn) {
  const filter = filterFn || (person => person);
  return people
    .filter(filter)
    .sort((p1, p2) => {
      const lnCompare = p1.attributes.lastName.localeCompare(p2.attributes.lastName);
      if (lnCompare) return lnCompare;

      return p1.attributes.firstName.localeCompare(p2.attributes.firstName);
    });
}

export function schoolYearTerms(schoolYear, terms) {
  const year = parseInt(schoolYear, 10);
  return terms
    .filter(term => term.attributes.schoolYear === year)
    .sort((t1, t2) => t1.attributes.name.localeCompare(t2.attributes.name));
}
