# AWS - Amazon Web Services

- Fastest growing cloud computing
- Largest cloud computing platform
- More organizations outsourcing the IT to AWS
- AWS certifications are most important

## Levels of AWS certifications

- Foundational
    - Knowledge-based certification for foundational understanding of AWS Cloud.
    - **No prior experience needed.**
        - Cloud Practitioner
- Associate level
    - Role-based certifications that showcase your knowledge and skills on AWS and build your credibility as an AWS Cloud professional.
    - **Prior cloud and/or strong on-premises IT experience recommended.**
        - Solution Architect
        - Developer
        - SysOps Administration
- Professional level
    - Role-based certifications that validate advanced skills and knowledge required to design secure, optimized, and modernized applications and to automate processes on AWS.
    - **2 years of prior AWS Cloud experience recommended.**
        - Solution Architect
        - DevOps Engineer
- Specialty
    - Dive deeper and position yourself as a trusted advisor to your stakeholders and/or customers in these strategic areas.
        - Advance Networking
        - Data Analytics
        - Database
        - Machine Learning
        - Security
        - SAP on AWS

## Regions

- Region in just a geographical area.
- A region can have one more data centres.
- Data centres are also known as availability zones.
- India has a data centre in Mumbai and mini data centres in Delhi and Bangalore.
- Mini data centres are also called as edge locations and are connected to a main data centre.
- There are overall
    - **25** launched regions and
    - **81** Availability zones / Data Centres.

## Amazon EC2

- A web service that provides secure
- Quickly boot into a new system
- Pay as you use
- Crash / failure resistant

## Instance purchase options

- On demand instances
    - Pay by the hour instance.
- Reserved instance
    - Long term commitments in advance. This reduces cost of overall order.
- Spot instance
    - Auctions for an instance on commodity hardware (We get the hardware for 4 hours).
- Dedicated host
    - We pay for physical host.

## Using EC2

Under services, open EC2

### Creating an instance

- Go to instances
- Click **Launch Instance**.
- Select the **machine image**.
- Select a instance type (Basically that is free tier eligible).
    - t2.micro - intel cpu
    - t2a.micro - AMD cpu
- Configure the instance
    - Enter number of instances
    - Request spot instance (auctions)
    - Modify network
    - Select placement group
        - A placement group is used for disaster recovery
        - Strategies used :
            - **Clustering** - When data and backup are kept on the same rack
            - **Partition** - When data and backup are kept on different racks
            - **Spread** - Placing data and backup over different regions or availability zones.
        - Create one using the create **placement group option** on EC2 dashboard.
- Under tenancy select a shared hardware instance
- Enclave - If we want to create an isolated environment
- Add some storage
- Add any tags and add them to instances, volumes as well as network instances from the checkboxes.
    - To name some instance use `Name` as key value for the tag.
- Configure the security group next and create a security group
    - RDP
        - Remote Desktop Protocol
        - port - 3389
        - Source - Set it to **anywhere**
    - To allow http, select **Add Rule** > **HTTP** with port range 80 and source **anywhere**
    - At max we can only attach 5 security groups and at least 1
- Click **Launch**
- Create some key-pair and download it; and click **Launch instance**
    - **VERY IMPORTANT** - you can download the key pair only while generating
    - if you forget to download the key or
    - accidentally deleted the key
    - there is no way to recover it
    - best you can do then is to detach the storage attached and attach it to another instance
- Click on the instance ID shown on screen until it comes to running state.
- Once the status shows 2/2 checks passed, select the instance, click **Connect** on top and select RDP client.
- Download the **remote desktop file** and get the password.
    - It asks for the key-pair file, so upload the .pem file.
    - Decrypt it and get the password.
    - Browse the remote desktop file and enter the credentials.
- The machine is ready to use.

### Server manager

#### Hosting a website

> on windows server

On the host machine, we can use the server manager to install features or perform server related tasks.

- Example:
    - Add server roles > Server Roles > Web server(IIS)

Default localhost webpage is stored under `C:/inetpub/wwwroot/`
which can be accessed at localhost url in a web browser.

Delete the default files and place your own web-pages.

Now to restart the localhost, open the IIS on host machine and select

- `Instance > sites > Default Web Site` from the left browsing menu.
- Right click and click restart on `Manage Website`.

In order to access the webpage globally, go to instances on the AWS console and copy
the public IPv4 address and paste it in a browser.

> Note: you probably used `http` protocol so use `http://ip-address` in browser
> and not `https://ip-address`

- To add some other files, other than index.html.
- Go to IIS manager and under default documents, add a new document.

#### Dual hosting

> on windows server

- Create a new folder on the host machine and create your pages.
- Open the IIS manager and under **sites** in the left browser, click create new site.
- Give name and browse the physical path.
- If the port is already occupied, change the port number.
- Click on start.

The newly created site will not work immediately as we need to create
inbound rules in the firewall under security group for the instance.

- Add a Custom TCP rule and add the port range 8080 and save.
- Also disable the firewall on host machine.

#### Connecting to linux instance

- Instead of RDB, enable SSH under **Configure security group** at port 22.
- You can use the existing key-pair
- Create a linux instance as usual.
    - After having 2/2 checks, copy the public IP of the instance.
- In command line, open ssh
- Connect to the linux host using :
    - `ssh -i ./production.pem enc-user@<public ip>`
    - `-i` means give identity file which ends with `.pem`
    - on linux use `chmod 004 pemfile` to change the permissions of the file
- after logging in using `ssh` change the user to `root`
    - use `sudo su`
        - to verify this use `whoami` it show show `root`
- Install required http libraries
    - `yum install httpd*` - install the apache server
    - `yum install wget` - install wget a cli tool to download files
- Change working directory to `/var/www/html`
    - use `cd /var/www/html` to do so
- Create your html file
    - use `touch index.html` to do so
- Start http service
    - `service httpd start` or you can use
    - `systemctl start httpd`
- To keep this service running even after restart,
    - use `chkconfig httpd on` or
    - `systemctl enable httpd.service`
    - which checks the services on startup
- Modify the `index.html` and restart `httpd` service
    - use `restart httpd service` or
    - `systemctl restart httpd`
- In case you want to verify that `httpd` service is running
    - use `systemctl status httpd`

> Note: EC2 is a regional service and the stuff done in one region
> is not available in another region.

### DNS

- DNS is a server that works along with the root server to resolve a domain name and provide the ip.
- Root servers are different for `.com`, `.in`, `.uk` etc.
- DNS server asks the root server what the IP of the asked domain is.
- The DNS then conveys the reply to the consumer,
- and the IP is then used to connect to the main server.

### Elastic IP Address

- Elastic IP address is static IPv4 address designed for dynamic cloud computing.
- Elastic IP is associated to the AWS account
- With elastic IP, we can mask failure of one instance to the another
- To use it, first allocate one IP to your account and then associate it to the instance or a NIC
- We can always allocate and deallocate an IP from a resource
- If an Elastic IP gets associated to an idle instance/unattached NIC, we are charged for the IP
- It is meant to be used withing a particular region only.

### Implementation

- Under **Network and Security** find the **Elastic IP** option
- Allocate the elastic IP
- Select the region
- Click **Allocate**
- Now under **Actions** in the same page, associate it to an instance
- Choose an instance that you created
- Click **Associate**

You can check the public IP address for the instance now and even
on restarting the machine, the IP remains same

### Creating backup server using Elastic IP

- Create an instance (main instance)
- Create another instance (backup instance)
- Associate the Elastic IP to the main instance
- Now as soon as the main instance goes down,
    - deallocate the IP from the main instance and
    - allocate it to the backup instance.
    - The service will be available back again.
- Be sure to release/deallocate the IP from main server
    - or you will be charged a lot

## Amazon EBS

- Amazon EBS (Elastic Block Store) is the storage system in the amazon cloud.
- It provides block storage volumes on the cloud.
- Each EBS volume is automatically replicated to prevent component failure.
- Typical use cases are for working with
    - Big Data analytics,
    - streams,
    - log processing and
    - warehouse applications.

### Features

- High performance
- Availability
- Encryption
- Access management
- Snapshots
- Reliable
- Low latency
- Backup and restore
- Quick scaling
- Geographic flexibility

### Creating a new EBS volume

- Select **Volumes** from EBS on left browsing menu
- Check the availability zone for the instance you want to attach the drive to
- Click create.
- This will just create a volume that will not be attached to anything

### Attaching a EBS volume to a host

- Under **volumes**, select the volume that you created and want to attach to the system.
- From **Actions**, select **Attach Volume**
- Select the instance you want to attach the disk to

#### Attaching to Windows

- Open the host that you attached the disk to
- Run disk manager
- Bring the disk online and initialize it by right clicking on the new disk
- Follow the procedure to allocate the size for new disk

#### Attaching to Linux

- Connect to the instance using SSH
- now use
    - `fdisk -l` - to list all attached drives
    - `fdisk /dev/<diskname>` - to open disk utility for the attached drive (interactive mode)
- Create a new partition
    - `m` - Help, and check change
    - `n` - Create new partition
    - `p` - Create the partition as primary
    - `1` - Select the 1st sector [1 by default]
    - `+10G` - Size of the volume
    - `w` - Save and exit
- Mount the partition
    - `mkdir /foldername` - Create a new folder
    - `mkfs.ext4 /dev/<diskname>` - Format the drive to ext4
    - `mkfs.<file_system>` - reformat the hard disk according to the filesystem
    - `mount /dev/<diskname> /foldername` - Create new partition
