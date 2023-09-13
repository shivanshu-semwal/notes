# Data Mining

## Process

```
define business model------.    <<--------------.
map top ML problem         | 80% work           |
data preparation           |                    |
exploratory data analysis--'                    |
modelling---------------------------| 20% work  |
evaluation--------------------------'-----------'
```

1. defining business model
    - clearly define the problem
    - set success criteria
    - define clear data science objective
2. map to ML model
    - break business problems to data science problems
    - identify the ML problem category
3. data preparation
    - understand the data and it's constraints
    - formulate data analytics strategies
    - perform required transformations
4. EDA - exploratory data analysis
    - perform statistical and visual analysis
    - discover and handle outlier or errors
    - shortlist predictive modelling techniques
5. Modelling
    - experiment with multiple models
    - choose most optimal model
    - create a feedback loop
6. evaluation
    - use model on real data
    - test its accuracy
    - if the model performs poorly start again form defining business model

## CRISP DM

- cross-industry standard for data mining

```
 .------------->>------>>----------->>-------------.
 |      Business      ------->   Data              |
 |  .-->Understanding <--------- Understanding     |
 |  |                                 |            |
 |  |              +----+             |            |
 ^  |              |DATA|             V            V
 ^  |              +----+             Data         V
 ^  | Deployment                      Preparation  |
 |  |     ^                             |  ^       |
 |  |     |                             |  |       |
 |  |     |                             V  |       |
 |  '-----'--------Evaluation <------ Modelling    |
 '-------<<--------<<-------------<<---------------'
```

- most widely used analytics model
- The outer circle in the diagram symbolizes the cyclic nature of data mining itself.
- A data mining process continues after a solution has been deployed.
- The lessons learned during the process can trigger new, often more focused business questions,
- and subsequent data mining processes will benefit from the experiences of previous ones.
