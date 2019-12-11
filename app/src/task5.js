export function happyTickets(context) {
  if (context.min.length !== 6 || context.max.length !== 6) {
    return 'An argument is incorrect!';
  }

  let simple = 0;
  let hard = 0;
  let curTicket = context.min;

  while (curTicket !== defineNextTicket(context.max)) {
    const ticketNums = curTicket.split('').map(n => Number(n));

    if (ticketNums[0] + ticketNums[1] + ticketNums[2] === ticketNums[3] + ticketNums[4] + ticketNums[5]) {
      simple += 1;
    }
    if (ticketNums[0] + ticketNums[2] + ticketNums[4] === ticketNums[1] + ticketNums[3] + ticketNums[5]) {
      hard += 1;
    }

    curTicket = defineNextTicket(curTicket);
  }

  return {
    winner: (simple > hard)
      ? 'Simple' : (simple < hard)
        ? 'Hard' : 'Draw',
    simple,
    hard
  };
}

export function defineNextTicket(ticket) {
  const ticketNums = ticket.split('').map(n => Number(n));
  const nextTicketNums = [];

  ticketNums.reduceRight((previous, current) => {
    if (current + previous === 10) {
      nextTicketNums.unshift(0);
      return 1;
    }
    else {
      nextTicketNums.unshift(current + previous);
      return 0;
    }
  }, 1);

  return nextTicketNums.join('');
}