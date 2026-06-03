export default function map_tech_to_icon(tech) {
    if (typeof tech !== "string") {
        return `Function only accepts strings, not ${typeof tech}.`
    }

    switch (tech) {
        case "Python":
            return <img
                src="./logos/python.svg"
                alt="Python logo"
                className="logo"
            />

        case "Flask":
            return <img
                src="./logos/flask.svg"
                alt="Flask logo"
                className="logo"
            />

        case "AWS DynamoDB":
            return <img
                src="./logos/aws-dynamodb.png"
                alt="AWS DynamoDB logo"
                className="logo"
            />

        case "Google App Engine":
            return <img
                src="./logos/gcp-app-engine.png"
                alt="Google App Engine logo"
                className="logo"
            />

        case "Google Cloud Storage":
            return <img
                src="./logos/gcp-storage.png"
                alt="Google Cloud Storage logo"
                className="logo"
            />

        case "React":
            return <img
                src="./logos/react.svg"
                alt="React logo"
                className="logo"
            />

        case "SASS":
            return <img
                src="./logos/sass.svg"
                alt="SASS logo"
                className="logo"
            />

        case "JavaScript":
            return <img
                src="./logos/javascript.svg"
                alt="JavaScript logo"
                className="logo"
            />

        case "Portainer":
            return <img
                src="./logos/portainer.svg"
                alt="Portainer logo"
                className="logo"
            />

        case "Postgres":
            return <img
                src="./logos/postgres.svg"
                alt="PostgreSQL logo"
                className="logo"
            />

        case "Proxmox":
            return <img
                src="./logos/proxmox.svg"
                alt="Proxmox logo"
                className="logo"
            />

        case "TrueNAS":
            return <img
                src="./logos/truenas.svg"
                alt="TrueNAS logo"
                className="logo"
            />

        case "Nginx":
            return <img
                src="./logos/nginx.svg"
                alt="Nginx logo"
                className="logo"
            />

        case "UniFi":
            return <img
                src="./logos/unifi.svg"
                alt="UniFi logo"
                className="logo"
            />

        case "ZFS":
            return <img
                src="./logos/zfs.svg"
                alt="ZFS logo"
                className="logo"
            />

        case "Home Assistant":
            return <img
                src="./logos/home-assistant.svg"
                alt="Home Assistant logo"
                className="logo"
            />

        case "Z-Wave":
            return <img
                src="./logos/zwave.png"
                alt="Z-Wave logo"
                className="logo"
            />

        case "Zigbee":
            return <img
                src="./logos/zigbee.svg"
                alt="Zigbee logo"
                className="logo"
            />

        case "Matter":
            return <img
                src="./logos/matter.svg"
                alt="Matter logo"
                className="logo"
            />

        default:
            return "Logo not found"
    }
}
