﻿<#
.SYNOPSIS
    Creates a new database connection at the specified path.
#>
function Connect-Database {
    [CmdletBinding()]
    param (
        [string]$Path = ":memory:"
    )

    $db = [DuckDB.NET.Data.DuckDBConnection]::new("Data Source=$dbPath")
    $db.Open()
    return $db
}
