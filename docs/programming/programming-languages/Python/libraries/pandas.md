# Pandas

```py
# Import Pandas
import pandas as pd

# Creating DataFrames
df = pd.DataFrame(data)            # Create a DataFrame from data
df = pd.read_csv('file.csv')       # Read from a CSV file
df = pd.read_excel('file.xlsx')    # Read from an Excel file

# Basic DataFrame Operations
df.head()                          # Display first 5 rows
df.tail()                          # Display last 5 rows
df.shape                           # Number of rows and columns
df.info()                          # Summary of DataFrame
df.columns                         # List of column names
df.index                           # Index information
df.describe()                      # Summary statistics

# Selection and Indexing
df['column_name']                  # Select a column
df[['col1', 'col2']]               # Select multiple columns
df.loc[row_label]                  # Select row by label
df.iloc[row_index]                 # Select row by integer index
df.loc[condition]                  # Select rows based on condition
df.iloc[condition]                 # Select rows based on condition

# Filtering Data
df[df['column_name'] > value]      # Filter rows based on condition
df.query('condition')              # Filter using SQL-like queries

# Sorting
df.sort_values('column_name')      # Sort DataFrame by column
df.sort_values(['col1', 'col2'])   # Sort by multiple columns
df.sort_index()                    # Sort by index

# Aggregation
df['column_name'].sum()            # Sum of values in column
df['column_name'].mean()           # Mean of values in column
df.groupby('group_col').agg(func)  # Apply aggregate function to groups

# Missing Data
df.isna()                          # Boolean mask for missing values
df.dropna()                        # Drop rows with missing values
df.fillna(value)                   # Fill missing values

# Creating and Modifying Columns
df['new_column'] = values          # Create a new column
df['new_col'] = df['col'] + 1      # Perform operations on columns

# Data Cleaning
df['column_name'] = df['column_name'].str.strip()  # Remove leading/trailing spaces
df['column_name'] = df['column_name'].str.lower()  # Convert to lowercase

# Merging DataFrames
pd.merge(df1, df2, on='common_col')              # Merge based on a common column
pd.concat([df1, df2], axis=0)                   # Concatenate along rows

# Grouping and Aggregation
df.groupby('column_name').agg({'col1': 'mean', 'col2': 'sum'})

# Pivot Tables
df.pivot_table(values='value_col', index='index_col', columns='col_to_pivot')

# Reshaping Data
df.melt(id_vars=['col1'], value_vars=['col2'])  # Convert wide data to long format
df.pivot(index='index_col', columns='col_to_pivot', values='value_col')

# DateTime Operations
df['datetime_col'] = pd.to_datetime(df['datetime_col'])  # Convert to datetime
df.set_index('datetime_col', inplace=True)       # Set datetime column as index

# Save DataFrames
df.to_csv('file.csv', index=False)         # Save to CSV
df.to_excel('file.xlsx', index=False)      # Save to Excel
```