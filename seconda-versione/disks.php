<?php
        include __DIR__ . '/db/disks.php';

        $res = [
            'success' => true,
            'response' => $disks,
        ];

        header('Content-Type: application/json');

        echo json_encode($res);

    ?>