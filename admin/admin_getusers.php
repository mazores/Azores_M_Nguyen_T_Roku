<?php

    require_once '../load.php';

    // get all Roku users
    if (isset($_GET['allusers'])) {
        $users = getAllUsers();

        // send this (all the users, or error message) back to Javascript
        echo $users;
    }