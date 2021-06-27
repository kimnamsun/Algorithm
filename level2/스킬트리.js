const solution = (skill, skillTrees) => {

  const isAvailable = s => {
    let skillArr = skill.split('');

    for (let i = 0; i < s.length; i++) {
      if (!skill.includes(s[i]) || s[i] === skillArr.shift()) {
        continue;
      }
      return true;
    }
    return false;
  }

  return skillTrees.filter(isAvailable).length;
}