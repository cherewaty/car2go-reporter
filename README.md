# car2go Issue Reporting

car2go is a complex transportation solution that relies on wireless networks, local cooperation, and sheer scale to succeed.

How do we ensure that our vehicles maintain data connectivity?

## Technical challenges
One of the most common problems with the day-to-day experience of using car2go is unavoidable with Internet of Things systems: data connection reliability. Users regularly experience the pain of reserving a car2go, going to the map location, and the car not being there. Similarly, the mobile apps or the in-car navigation system can falsely tell the users there is an available space at a car2go parkspot.

## Human challenges
A system like car2go has to rely on a simple set of rules to make it accessible for everyone and fit in existing city infrastructure. Parking is one of the biggest benefits of driving a car2go, but other drivers who don't follow the rules make it harder. Non-car2go vehicles are often parked in car2go parkspots, and car2go drivers occasionally park in private lots.

## Lean on the community
We can easily imagine a future where autonomous cars drive and park themselves around a city with rock-solid wireless networks, but we're not there yet. Since we humans are still driving and parking, why don't we rely on the community to fill in the gaps that tech hasn't solved yet? Every time I encounter a flawed situation in the car2go experience, there's an opportunity to make the system better for all users.

## Feature: Report a Problem
_As a registered car2go user, I can report a problem with a vehicle or parkspot from a car2go mobile app._

The details view of a vehicle or parkspot would contain a new button labeled "Report Problem". Clicking the button brings up a set of options to choose from.

#### For a vehicle:
```
  What’s wrong?

  The car2go vehicle...
  ... isn’t here.
  ... is not following parking rules.
  ... is damaged.
  ... is dirty.
```
#### For a parkspot:
```
  What’s wrong?
  The car2go parkspot...
  ... is occupied by a non-car2go vehicle.
  ... is full.
  ... has a vacancy.
```

Both the vehicle and parkspot problem selection screens need this message:
```
If you were involved in accident or need help with your current rental, please call us.
```

After selecting an option, the user receives the message "Thanks for letting us know!" with an "OK" button. Clicking the "OK" button returns the user to the map.

### MVP scope
The minimum viable implementation of this feature can live in a browser-based app. By opening a url, a user can view car2go vehicles and parkspots for a city, select the relevant one, and go through the "Report Problem" flow without even logging in. The web app can then email car2go support. Here's what one of those emails might look like:
```
A user reported that the car2go vehicle with license plate {{plate}} is not
located at {{latLong}}.
```

If the customer is logged in, their info would be part of the email message:
```
{{user.fullName}} ({{user.email}}) reported that a non-car2go
vehicle is occupying the car2go parkspot at {{latLong}}.
```

Reporting any of these problems right now requires a phone call or email, but users will be more likely to submit issues with a two-click flow.

### What this feature unlocks
Simply notifying the car2go support team of problems is nice, but the real power comes when reporting a problem is part of the car2go API.

Instead of sending an email, the car2go mobile apps would `POST` the problem to something like `https://www.car2go.com/api/vX.X/reports`. The API can then take action based on the type of problem:

##### The car2go vehicle isn't here.
Immediately remove the vehicle from `GET` `/vehicles` and attempt to get the vehicle's new location. This will prevent other users from trying (and failing) to start a rental with the vehicle at its incorrect location.

##### The car2go vehicle isn't following parking rules.
Notify the previous driver of the vehicle about their bad parking job. If the driver in question commits multiple offenses, customer support should manually intervene with harsher warnings, fines, or even account suspension.

##### The car2go vehicle is damaged.
Immediately remove the vehicle from circulation.

##### The car2go vehicle is dirty.
Flag that the vehicle is due for a washing.

##### The car2go parkspot is occupied by a non-car2go vehicle.
If there is any cooperation with local parking enforcement, notify them.

##### The car2go parkspot is full.
Do not report a vacancy with `GET` `/parkingspots`. This will prevent other users from trying (and failing) to park in that spot.

##### The car2go parkspot has a vacancy.
Re-evaluate the locations of the vehicle(s) that report they're parked in that spot.

### Savings for car2go
By accepting more issue reporting through a UI, car2go's customer support team would receive fewer phone calls.

### Better experience for users
With a system that can immediately respond to reports of data inconsistencies, fewer car2go users will run into frustrations with moved cars, rule-breaking fellow drivers, and unavailable parking spots.


## Running this app

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* `cd car2go-reporter`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

#### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

#### Running Tests

* `ember test`
* `ember test --server`

#### Building

* `ember build` (development)
* `ember build --environment production` (production)
