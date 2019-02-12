const voters = [];
const democratCandidates = [];
const republicanCandidates = [];
const independentCandidates = [];

class Person {
  constructor(name) {
    this.name = name;
  }
}
class Voter extends Person {
  constructor(name, ideology) {
    super(name);
    this.ideology = ideology;
  }
}

class Candidate extends Person {
  constructor(name, party, votes = 0) {
    super(name);
    this.party = party;
    this.votes = votes;
  }
}

const isEmpty = array => !array.length;
const getPercentage = _ => Math.ceil(Math.random() * 100);
const getRandomCandidate = candidateArray => candidateArray[Math.floor(Math.random() * candidateArray.length)] || Object();

const getWinner = _ => {
  const candidatesList = [...democratCandidates, ...republicanCandidates, ...independentCandidates];
  if (isEmpty(candidatesList)) return alert('There are no candidates to vote for!');
  const winner = candidatesList.reduce((acc, candidate) => acc.votes > candidate.votes ? acc : candidate);
  alert(`${winner.party} candidate, ${winner.name} is the winner!`);
};

const determineLiberal = votePercentage => {
  if (votePercentage >= 1 && votePercentage <= 60) getRandomCandidate(democratCandidates).votes++;
  else if (votePercentage >= 61 && votePercentage <= 80) getRandomCandidate(republicanCandidates).votes++;
  else getRandomCandidate(independentCandidates).votes++;
};

const determineConservative = votePercentage => {
  if (votePercentage >= 1 && votePercentage <= 20) getRandomCandidate(democratCandidates).votes++;
  else if (votePercentage >= 21 && votePercentage <= 80) getRandomCandidate(republicanCandidates).votes++;
  else getRandomCandidate(independentCandidates).votes++;
};

const determineIndependent = votePercentage => {
  if (votePercentage >= 1 && votePercentage <= 25) getRandomCandidate(democratCandidates).votes++;
  else if (votePercentage >= 26 && votePercentage <= 50) getRandomCandidate(republicanCandidates).votes++;
  else getRandomCandidate(independentCandidates).votes++;
};

const simulateVote = _ => {
  voters.forEach(voter => {
    const votePercentage = getPercentage();
    const currentIdeology = voter.ideology.toLowerCase();
    if (currentIdeology === "liberal") determineLiberal(votePercentage);
    else if (currentIdeology === "conservative") determineConservative(votePercentage);
    else determineIndependent(votePercentage);
  });
  getWinner();
};

$(document).ready(_ => {
  $("#candidate-form form").submit(e => {
    e.preventDefault();
    const candidateName = $("#candidate-name").val();
    const candidateParty = $("#candidate-party").val();
    const newCandidate = new Candidate(candidateName, candidateParty);
    const party = newCandidate.party.toLowerCase();
    if (party === "democrat") democratCandidates.push(newCandidate);
    else if (party === "republican") republicanCandidates.push(newCandidate);
    else if (party === "independent") independentCandidates.push(newCandidate);
    $("#candidate-list .list-group").append(
      `<li class='list-group-item'>${candidateName}, ${candidateParty}</li>`
    );
  });
  $("#voter-form form").submit(e => {
    e.preventDefault();
    const voterName = $("#voter-name").val();
    const voterIdeology = $("#voter-ideology").val();
    const newVoter = new Voter(voterName, voterIdeology);
    voters.push(newVoter);
    $("#voter-list .list-group").append(
      `<li class='list-group-item'>${voterName}, ${voterIdeology}`
    );
  });
  $("#vote-btn-div button").click(_ => simulateVote());
});
