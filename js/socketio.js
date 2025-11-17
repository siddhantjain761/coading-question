//how. id the socket connection been made

function initializeEventSource(config) {
    // Dynamically create the event source URL with the required parameters
    var eventSourceURL =
        "https://services.inflightpanasonic.aero/inflight/services/event/v1/eventstream?" +
        "event=core.event_server.nop|core.remote_comm.seat_swap|core.remote_comm.pair_notify|core.remote_comm.unpair_notify|core.remote_comm.message" +
        "&padding=1" +
        "&did=" +
        $scope.getDID(config); // Insert DID dynamically

    // Create a new EventSource instance
    $rootScope.sse = new EventSource(eventSourceURL);

    // Seat side event listener
    $rootScope.sse.addEventListener("core.remote_comm.message", (e) => {
        // Call the event handler when the event is received
        $rootScope.seatEventControllerDidReceiveMessage(e);
    });
}

//Seat side event listener
$rootScope.seatEventControllerDidReceiveMessage = async function (e) {
    let params = new URLSearchParams(e.data);
    let messageString = params.get("message");
    let messageObject = JSON.parse(messageString);

    var event = {
        type: e.type,
        data: messageObject,
        argv: [],
    };
    if (event.data.type === SERVER_SIDE_EVENTS.REJECT_INITIATE_PAIR) {
        console.log("seat pair rejecteed from seat ");
        $rootScope.pairingRejected = true;
    }
}