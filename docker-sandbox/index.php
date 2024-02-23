<?php 
    //phpinfo();


// Database connection parameters
$servername = "db";
$username = "root";
$password = "";
$database = "School_DB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select data from the students table
$sql = "SELECT * FROM students";

// Execute the query
$result = $conn->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . "<br>";
        echo "Name: " . $row["name"] . "<br>";
        echo "Age: " . $row["age"] . "<br>";
        echo "Gender: " . $row["gender"] . "<br>";
        echo "Grade: " . $row["grade"] . "<br>";
        echo "<hr>";
    }
} else {
    echo "0 results";
}

// Close the database connection
$conn->close();

?>

