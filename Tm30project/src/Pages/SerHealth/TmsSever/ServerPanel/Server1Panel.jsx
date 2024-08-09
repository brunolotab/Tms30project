import memory from '../../../../assets/health/memory.png'
import disk from '../../../../assets/health/disk.png'
import line from '../../../../assets/health/Line1.png'
import user from '../../../../assets/health/user.png'
import line2 from '../../../../assets/health/Line 2.png'
import line3 from '../../../../assets/health/Line 3.png'


export const server1 =[
    {
        icon: memory, tag: 'Memory', total: 'Total:16.78G 18%', used:'Used: 1.83G', img: line
    },
    {
        icon: disk, tag: 'Disk', total: 'Total:76.78G 70%', used:'Used: 1.83G', img: line2
    },
    {
        icon: user, tag: 'Server Load', total: 'Total:7.78G 70%', used:'Used: 1.83G', img: line3
    },
    {
        icon: user, tag: 'Transaction Process', total: 'Total:2.0M 70%', used:'Used: 1.0M', img: line2
    },
]