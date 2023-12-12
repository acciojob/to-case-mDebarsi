function toCase(text) {
  // write your code here
	// Check for empty string
  if (text === '') {
    return '-';
  }

  // Convert to lowercase and uppercase, then concatenate with '-'
  const result = `${text.toLowerCase()}-${text.toUpperCase()}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
