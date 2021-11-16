const { MessageEmbed } = require('discord.js');

module.exports = {
    async selectreply(interaction) {
        await interaction.deferUpdate();
        const choice = interaction.values[0]
        if(choice == 'one'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Getting Started - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/0-Getting-Started')
                .addFields(
                    { name: '1', value: `Syntax Resources [(link)](https://training.ufds.cc/stages/1-Junior/0-Getting-Started/1-Syntax-Resources)`,inline: false },
                    { name: '2', value: `Debugging Tips [(link)](https://training.ufds.cc/stages/1-Junior/0-Getting-Started/2-Debugging-Tips)`,inline: false },
                    { name: '3', value: `Time Complexity [(link)](https://training.ufds.cc/stages/1-Junior/0-Getting-Started/3-Introduction-to-Time-Complexity)`,inline: false },
                    { name: '4', value: `Modular Arithmetic [(link)](https://training.ufds.cc/stages/1-Junior/0-Getting-Started/4-Modular-Arithmetic)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'two'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('STL - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/1-STL')
                .addFields(
                    { name: '1', value: `Introduction [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/1-Introduction)`,inline: false },
                    { name: '2', value: `Pairs [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/2-Pairs)`,inline: false },
                    { name: '3', value: `Tuples [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/3-Tuples)`,inline: false },
                    { name: '4', value: `Sequence Containers [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/4-Sequence-Containers)`,inline: false },
                    { name: '5', value: `Iterators [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/5-Iterators)`,inline: false },
                    { name: '6', value: `Sorting [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/6-Sorting)`,inline: false },
                    { name: '7', value: `Stacks and Qeueues [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/7-Stacks-and-Queues)`,inline: false },
                    { name: '8', value: `Ordered Containers [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/8-Ordered-Containers)`,inline: false },
                    { name: '9', value: `Unordered Containers [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/9-Unordered-Containers)`,inline: false },
                    { name: '10', value: `Misc Useful STL Functions [(link)](https://training.ufds.cc/stages/1-Junior/1-STL/10-Misc-Useful-Functions)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'three'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Greedy - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/2-Greedy')
                .addFields(
                    { name: '1', value: `Intro to Greedy [(link)](https://training.ufds.cc/stages/1-Junior/2-Greedy/1-Intro-to-Greedy)`,inline: false },
                    { name: '2', value: `Common themes in Greedy problems [(link)](https://training.ufds.cc/stages/1-Junior/2-Greedy/2-Common-Themes)`,inline: false },
                    { name: '3', value: `Greedy Techniques [(link)](https://training.ufds.cc/stages/1-Junior/2-Greedy/3-Common-Techniques)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'four'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Binary Search - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/3-Binary-Search')
                .addFields(
                    { name: '1', value: `Intro to Binary Search [(link)](https://training.ufds.cc/stages/1-Junior/3-Binary-Search/1-Introduction)`,inline: false },
                    { name: '2', value: `BS and STL Containers [(link)](https://training.ufds.cc/stages/1-Junior/3-Binary-Search/2-BS-In-STL-Containers)`,inline: false },
                    { name: '3', value: `Binary Searching the answer [(link)](https://training.ufds.cc/stages/1-Junior/3-Binary-Search/3-BSTA)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'five'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Introduction to DP - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/4-Introduction-to-Dynamic-Programming')
                .addFields(
                    { name: '1', value: `Basic Idea of DP [(link)](https://training.ufds.cc/stages/1-Junior/4-Introduction-to-Dynamic-Programming/1-DP-Basics)`,inline: false },
                    { name: '2', value: `Dynamic Programming Components [(link)](https://training.ufds.cc/stages/1-Junior/4-Introduction-to-Dynamic-Programming/2-DP-Terminology)`,inline: false },
                    { name: '3', value: `Top-down and Bottom-up DP [(link)](https://training.ufds.cc/stages/1-Junior/4-Introduction-to-Dynamic-Programming/3-DP-TDBU)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'six'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Classic DP Problems - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems')
                .addFields(
                    { name: '1', value: `Extensions of Fibonacci [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/1-Fibonacci-Extensions)`,inline: false },
                    { name: '2', value: `Counting paths in a grid [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/2-Paths-In-Grid)`,inline: false },
                    { name: '3', value: `Prefix Sums [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/3-Prefix-Sum)`,inline: false },
                    { name: '4', value: `2D Prefix sums [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/4-2D-Prefix-Sum)`,inline: false },
                    { name: '5', value: `Maximum Subarray sum [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/5-Maximum-Subarray-Sum)`,inline: false },
                    { name: '6', value: `Longest Increasing Subsequence [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/6-LIS)`,inline: false },
                    { name: '7', value: `Coin change problem [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/7-Coin-Change)`,inline: false },
                    { name: '8', value: `Knapsack [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/8-Knapsack)`,inline: false },
                    { name: '9', value: `Pascal\'s Triangle [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/9-Pascal-Triangle)`,inline: false },
                    { name: '10', value: `Dynamic Programming mindset [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems/10-DP-Mindset)`,inline: false },

                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'seven'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Basic Graph theory - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory')
                .addFields(
                    { name: '1', value: `Introduction to Graphs [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/1-Intro-To-Graphs)`,inline: false },
                    { name: '2', value: `Introduction to Trees [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/2-Intro-To-Trees)`,inline: false },
                    { name: '3', value: `Graph Representation [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/3-Representation-Of-Graphs)`,inline: false },
                    { name: '4', value: `Depth First Search [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/4-Depth-First-Search)`,inline: false },
                    { name: '5', value: `Breadth First Search [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/5-Breadth-First-Search)`,inline: false },
                    { name: '6', value: `Flood Fill [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/6-Flood-Fill)`,inline: false },
                    { name: '7', value: `Shortest Path Algorithms [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/7-Shortest-Paths)`,inline: false },
                    { name: '8', value: `Topological Sort [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/8-Topological-Sorting)`,inline: false },
                    { name: '9', value: `Dynamic Programming on Directed Acyclic Graph [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/9-DP-On-DAG)`,inline: false },
                    { name: '10', value: `Implicit Graphs [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory/10-Implicit-Graphs)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'eight'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('More Classic DP Problems - UFDS (Junior)')
                .setURL('https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems')
                .addFields(
                    { name: '1', value: `Longest Common Subword [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems/1-LCSW)`,inline: false },
                    { name: '2', value: `Longest Common Subsequence [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems/2-LCSS)`,inline: false },
                    { name: '3', value: `Longest Increasing Subsequence in O(nlogn) [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems/3-LIS-nlogn)`,inline: false },
                    { name: '4', value: `Tiling [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems/4-Tiling)`,inline: false },
                    { name: '5', value: `Prefix Sums Optimization [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems/5-Prefix-Sums-Optimization)`,inline: false },
                    { name: '6', value: `Range DP [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems/6-Range-DP)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'nine'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Advanced Data Structures')
                .setURL('https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/')
                .addFields(
                    { name: '1', value: `Introduction to Segment Trees [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/1-Introduction-To-Segment-Trees)`,inline: false },
                    { name: '2', value: `LIS Using Segment Tree [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/2-LIS-Using-Segment-Tree)`,inline: false },
                    { name: '3', value: `Merge Sort Tree [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/3-Merge-Sort-Tree)`,inline: false },
                    { name: '4', value: `Other Applications of Segment Tree [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/4-Other-Segment-Tree-Applications)`,inline: false },
                    { name: '5', value: `Lazy Propagation [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/5-Lazy-Propagation)`,inline: false },
                    { name: '6', value: `Square Root Decomposition [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/6-Sqrt-Decomposition)`,inline: false },
                    { name: '7', value: `Case and Batch Processing [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/7-Processing)`,inline: false },
                    { name: '8', value: `Mo's Algorithm [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/8-Mo-Algorithm)`,inline: false },
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
        if(choice == 'ten'){
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('Mock INOI 6 - UFDS (Intermediate)')
                .setURL('https://training.ufds.cc/stages/2-Intermediate/1-Mock-INOI-6/1-Overview')
                .addFields(
                    { name: '1', value: `A. Placement [(link)](https://training.ufds.cc/stages/2-Intermediate/1-Mock-INOI-6/2-Placement)`,inline: false },
                    { name: '2', value: `B. Polyhash [(link)](https://training.ufds.cc/stages/2-Intermediate/1-Mock-INOI-6/3-Polyhash)`,inline: false },
                    { name: '3', value: `C. Stadium [(link)](https://training.ufds.cc/stages/2-Intermediate/1-Mock-INOI-6/4-Stadium)`,inline: false },
                    
                )
            await interaction.editReply({ embeds: [Embed], components: [] });
        }
    }
};