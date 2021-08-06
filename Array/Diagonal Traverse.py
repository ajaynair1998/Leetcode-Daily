# Solution
# Time O(N) | Space (1) -> if we dont consider the resultant array

def diagonalMatrix(array):
    res = []
    totalRow, totalCol = len(array) - 1, len(array[0]) - 1
    row, col = 0, 0
    goingUp = True
    while row <= totalRow and col <= totalCol:
        res.append( array[row][col] )
        if goingUp:
            if row == 0 or col == totalCol:
                goingUp = False
                if col == totalCol:  # First condition cannot be row == 0 as the corners should be given more importance
                    row += 1
                else:
                    col += 1
                    
            else:
                row -= 1
                col += 1
                
        else:
            if col == 0 or row == totalRow:
                goingUp = True
                if col == 0 or row == totalRow:
                    if row == totalRow:
                        col += 1
                    else:
                        row += 1
                else:
                    row += 1
                    col -= 1
                    
    return res
