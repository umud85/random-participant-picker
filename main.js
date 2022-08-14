const participants = [
  "John Doe",
  "Jane Smith",
  "Emma Johnson"
]

function pickParticipant(participants) {
  const picked = Math.floor(Math.random() * participants.length);
  return participants[picked];
}

console.log(pickParticipant(participants));