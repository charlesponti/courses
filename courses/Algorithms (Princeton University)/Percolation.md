# Percolation

- n by n grid of sites
- each site is open with probability p (or blocks with probability 1 - p)
- Sytem percolates iff top and bottom are connected by open sites

## Threshold
When N is large, theory guarentees a sharp threshold p*
* p > p* : almost certainly percolates
* p < p* : almost certainly does not percolate
* Therefore what is the value of p*?

## Monte Carlo simulation
- Initialise N-by-N grid to be blocked
- Declare random sites open until top connected to bottom
- Vacancy percentage estimates p*

## How to check whether an N-by-N system percolates?
* Create an object for each site and name them 0 to n^2 - 1
* Sites are in same component if connected by open sites
* Percolates iff any site on bottom row is connected to site on top row
* Connect newly opened site to all of its adjacent open sites
  * Up to 4 calls to union()

## Steps to develop a usable algorithm
* Model the problem
* Find an algorithm to solve it
* Fast enough? Fits in memory?
* If not, figure out why
* Find a way to address the problem
* Iterate until satisfied

