<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"></link>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <title>Laravel Vue Spa</title>

</head>

<body class="antialiased">

    <div id="app"></div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>