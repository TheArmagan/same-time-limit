# Same time limit

## Fully async!

### Method 1
Avg 1,53ms slower than expected probably because async context? Avg cpu usage 11,6% while benchmark running. Tested with Ryzen 5 3600

### Method 2 (Buggy for last task)
Avg 16,78ms slower than method 1 but cpu usage avg 0,3% instead of 11,6%. Yeah much more performant but little slower. Tested with Ryzen 5 3600
